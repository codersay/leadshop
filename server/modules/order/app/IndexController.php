<?php
/**
 * 订单控制器
 * @link http://www.heshop.com/
 * @copyright Copyright (c) 2020 HeShop Software LLC
 * @license http://www.heshop.com/license/
 */
namespace order\app;

use framework\common\BasicController;
use Yii;
use yii\data\ActiveDataProvider;

class IndexController extends BasicController
{

    /**
     * 重写父类
     * @return [type] [description]
     */
    public function actions()
    {
        $this->module->trigger('check_order');
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['update']);
        return $actions;
    }

    public function actionIndex()
    {
        //获取操作
        $behavior = Yii::$app->request->get('behavior', '');

        switch ($behavior) {
            case 'tabcount':
                return $this->tabcount();
                break;
            default:
                return $this->list();
                break;
        }
    }

    /**
     * 订单列表
     * @return [type] [description]
     */
    function list() {
        //获取头部信息
        $headers = Yii::$app->getRequest()->getHeaders();
        //获取分页信息
        $pageSize = $headers->get('X-Pagination-Per-Page') ?? 20;
        //订单分组
        $UID   = Yii::$app->user->identity->id;
        $where = ['order.UID' => $UID, 'buyer.is_deleted' => 0];
        //处理获取商品类型

        $tab_key = Yii::$app->request->get('tab_key', 'all');
        switch ($tab_key) {
            case 'unpaid': //待付款
                $where = ['and', $where, ['order.status' => 100]];
                break;
            case 'unsent': //待发货
                $where = ['and', $where, ['order.status' => 201]];
                break;
            case 'unreceived': //待收货
                $where = ['and', $where, ['order.status' => 202]];
                break;
            case 'noevaluate': //待评价
                $where = ['and', $where, ['order.status' => 203, 'order.is_evaluate' => 0]];
                break;
        }

        // //时间区间
        // $time_start = $keyword['time_start'] ?? false;
        // if ($time_start > 0) {
        //     $where = ['and', $where, ['>=', 'order.created_time', $time_start]];
        // }
        // $time_end = $keyword['time_end'] ?? false;
        // if ($time_end > 0) {
        //     $where = ['and', $where, ['<=', 'order.created_time', $time_end]];
        // }

        // //商品名称
        // $goods_name = $keyword['goods_name'] ?? false;
        // if ($goods_name) {
        //     $where = ['and', $where, ['like', 'goods.goods_name', $goods_name]];
        // }

        $orderBy = ['order.created_time' => SORT_DESC];

        $data = new ActiveDataProvider(
            [
                'query'      => M()::find()
                    ->alias('order')
                    ->joinWith([
                        'buyer as buyer',
                        'goods as goods',
                        'user as user',
                    ])
                    ->where($where)
                    ->orderBy($orderBy)
                    ->distinct()
                    ->asArray(),
                'pagination' => ['pageSize' => $pageSize, 'validatePage' => false],
            ]
        );

        $list = $data->getModels();
        //将所有返回内容中的本地地址代替字符串替换为域名
        $list = str2url($list);
        $data->setModels($list);
        return $data;
    }

    public function tabcount()
    {

        $UID   = Yii::$app->user->identity->id;
        $where = ['order.UID' => $UID, 'buyer.is_deleted' => 0];

        $data_list = ['unpaid' => 0, 'unsent' => 0, 'unreceived' => 0, 'noevaluate' => 0];
        foreach ($data_list as $key => &$value) {
            $w = null;
            switch ($key) {
                case 'unpaid': //待付款
                    $w = ['order.status' => 100];
                    break;
                case 'unsent': //待发货
                    $w = ['order.status' => 201];
                    break;
                case 'unreceived': //待收货
                    $w = ['order.status' => 202];
                    break;
                case 'noevaluate': //待评价
                    $w = ['order.status' => 203, 'order.is_evaluate' => 0];
                    break;
            }
            if ($w) {
                $w = ['and', $where, $w];
            } else {
                $w = $where;
            }

            $value = M()::find()->alias('order')
                ->joinWith([
                    'buyer as buyer',
                ])->where($w)->count();
        }

        $data_list['orderafter'] = M('order', 'OrderAfter')::find()->where(['UID' => $UID, 'status' => [100, 102, 111, 121, 122, 131, 132, 133]])->count();

        return $data_list;
    }

    /**
     * 订单详情
     * @return [type] [description]
     */
    public function actionView()
    {
        $id    = Yii::$app->request->get('id', false);
        $UID   = Yii::$app->user->identity->id;
        $where = ['order.id' => $id, 'order.UID' => $UID, 'buyer.is_deleted' => 0];

        $result = M()::find()
            ->alias('order')
            ->where($where)
            ->joinWith([
                'buyer as buyer',
                'goods as goods',
                'freight as freight',
            ])
            ->asArray()
            ->one();

        if (empty($result)) {
            Error('订单不存在');
        }

        return str2url($result);
    }

    /**
     * 创建订单
     * @return [type] [description]
     */
    public function actionCreate()
    {
        $post      = Yii::$app->request->post();
        $calculate = Yii::$app->request->get('calculate', false);
        $list      = $this->build(); //预创建订单

        if ($calculate == 'calculate') {
            //订单预提交页面信息
            $return_data = $list[1];
            $number      = 0;
            foreach ($return_data['goods_data'] as &$value) {
                $number += $value['goods_number'];
            }
            $return_data['goods_number_amount'] = round($number, 2);
            return str2url($return_data);
        }

        $UID    = Yii::$app->user->identity->id;
        $AppID  = Yii::$app->params['AppID'];
        $source = Yii::$app->params['AppType'];

        $transaction      = Yii::$app->db->beginTransaction(); //启动数据库事务
        $order_list       = [];
        $pay_total_amount = 0; //拆单时统一支付金额
        foreach ($list as $order_data) {
            $pay_total_amount += $order_data['pay_amount'];

            $setting_data = M('setting', 'Setting')::find()->where(['keyword' => 'setting_collection', 'merchant_id' => $order_data['merchant_id'], 'AppID' => $AppID])->select('content')->asArray()->one();
            if ($setting_data) {
                $setting_data['content'] = to_array($setting_data['content']);
                if (isset($setting_data['content']['trade_setting'])) {
                    $trade_setting = $setting_data['content']['trade_setting'];
                    if ($trade_setting['cancel_status']) {
                        $order_data['cancel_time'] = (float) $trade_setting['cancel_time'] * 60 * 60 + time();
                    }
                }
                if ($setting_data['content']['basic_setting']['run_status'] != 1) {
                    Error('店铺打烊中');
                }
            }
            $order_sn               = get_sn('osn');
            $order_data['order_sn'] = $order_sn;
            $order_data['UID']      = $UID;
            $order_data['AppID']    = $AppID;
            $order_data['type']     = $post['type'] ?? '';
            $order_data['status']   = 100;
            $order_data['source']   = $source ?? '';
            $model                  = M('order', 'Order', true);
            $model->setScenario('create');
            $model->setAttributes($order_data);
            if ($model->validate()) {
                if ($model->save()) {
                    if (!N('consignee_info')) {
                        $transaction->rollBack(); //事务回滚
                        Error('收货人信息为空');
                    }
                    //买家信息插入
                    $buyer_data = [
                        'order_sn' => $order_sn,
                        'note'     => $post['note'] ?? '',
                        'name'     => $post['consignee_info']['name'],
                        'mobile'   => $post['consignee_info']['mobile'],
                        'province' => $post['consignee_info']['province'],
                        'city'     => $post['consignee_info']['city'],
                        'district' => $post['consignee_info']['district'],
                        'address'  => $post['consignee_info']['address'],
                    ];
                    $buyer_model = M('order', 'OrderBuyer', true);
                    $buyer_model->setScenario('create');
                    $buyer_model->setAttributes($buyer_data);
                    if ($buyer_model->validate()) {
                        $buyer_res = $buyer_model->save();
                    } else {
                        $transaction->rollBack();
                        return $buyer_model;
                    }

                    //订单商品信息批量插入处理
                    $row = [];
                    $col = [];
                    foreach ($order_data['goods_data'] as $v) {
                        $v['order_sn']     = $order_sn;
                        $v['created_time'] = time();
                        array_push($row, array_values($v));
                        if (empty($col)) {
                            $col = array_keys($v);
                        }
                    }

                    $prefix     = Yii::$app->db->tablePrefix;
                    $table_name = $prefix . 'order_goods';
                    $goods_res  = Yii::$app->db->createCommand()->batchInsert($table_name, $col, $row)->execute();
                    if ($buyer_res && $goods_res) {
                        // $this->module->event->order_info = $model->toArray();
                        // $this->module->trigger('statistical_order');
                        array_push($order_list, ['order_sn' => $order_sn, 'order_id' => $model->attributes['id']]);
                    } else {
                        $transaction->rollBack(); //事务回滚
                        Error('下单失败');
                    }
                } else {
                    $transaction->rollBack(); //事务回滚
                    Error('下单失败');
                }

            } else {
                $transaction->rollBack(); //事务回滚
                return $model;
                // Error('下单失败');
            }
        }

        if (count($order_list) > 1) {
            $pay_model = M('order', 'OrderPay', true);
            $pay_sn    = get_sn('psn');
            $pay_data  = [
                'pay_sn'       => $pay_sn,
                'AppID'        => $AppID,
                'order_list'   => to_json($order_list),
                'total_amount' => $pay_total_amount,
            ];
            $pay_model->setAttributes($pay_data);
            if (!$pay_model->save()) {
                $transaction->rollBack(); //事务回滚
                Error('下单失败');
            }

            $return_data['pay_sn'] = $pay_sn;
        } else {
            $return_data = $order_list[0];
        }

        $return_data['pay_total_amount'] = $pay_total_amount;

        //执行下单事件
        $this->module->event->order_goods = $post['goods_data'];
        $this->module->trigger('add_order');

        if ($pay_total_amount == 0) {
            $free_res = $this->freePay($return_data);
            if (!$free_res) {
                $transaction->rollBack(); //事务回滚
                Error('下单失败');
            }
        }

        $transaction->commit(); //事务执行
        return $return_data;
    }

    public function freePay($order_info)
    {
        $order_sn = $order_info['order_sn'] ?? null;
        $model    = M('order', 'Order')::find()->where(['order_sn' => $order_sn])->one();
        if ($model && $model->status < 201) {
            $model->status   = 201;
            $model->pay_type = '';
            $model->pay_time = time();
            if ($model->save()) {
                $this->module->event->order_info = $model->toArray();
                $this->module->trigger('pay_order');
                // $this->module->trigger('statistical_order');
                $this->module->event->user_statistical = ['UID' => $model->UID, 'buy_number' => 1, 'buy_amount' => $model->pay_amount, 'last_buy_time' => time()];
                $this->module->trigger('user_statistical');
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * 重写刪除
     * @return [type] [description]
     */
    public function actionDelete()
    {
        $id    = Yii::$app->request->get('id', false);
        $check = M()::findOne($id);
        if (!in_array($check->status, [101, 102, 103, 204])) {
            Error('该订单不能删除');
        }
        $result = M('order', 'OrderBuyer')::updateAll(['is_deleted' => 1], ['order_sn' => $check->order_sn]);
        if ($result) {
            return $result;
        } else {
            Error('删除失败');
        }

    }

    /**
     * 编辑中转
     * @return [type] [description]
     */
    public function actionUpdate()
    {
        //获取操作
        $behavior = Yii::$app->request->get('behavior', '');

        switch ($behavior) {
            case 'cancel': //取消订单
                return $this->cancel();
                break;
            case 'received': //确认收货
                return $this->received();
                break;
            default:
                Error('未定义操作');
                break;
        }
    }

    /**
     * 用户取消订单
     * @return [type] [description]
     */
    public function cancel()
    {
        $id    = Yii::$app->request->get('id', false);
        $model = M()::findOne($id);
        if (empty($model)) {
            Error('订单不存在');
        }
        if ($model->status !== 100) {
            Error('非法操作');
        }
        $model->status      = 101;
        $model->cancel_time = time();

        if ($model->save()) {
            //执行取消订单事件
            $order_goods                             = M('order', 'OrderGoods')::find()->where(['order_sn' => $model->order_sn])->select('goods_id,goods_param,goods_number')->asArray()->all();
            $this->module->event->cancel_order_goods = $order_goods;
            $this->module->trigger('cancel_order');

            // $this->module->event->order_info = $model->toArray();
            // $this->module->trigger('statistical_order');
            return true;
        } else {
            Error('操作失败');
        }
    }

    /**
     * 确认收货
     * @return [type] [description]
     */
    public function received()
    {
        $id    = Yii::$app->request->get('id', false);
        $model = M()::findOne($id);
        if (empty($model)) {
            Error('订单不存在');
        }
        if ($model->status !== 202) {
            Error('非法操作');
        }
        $setting_data = M('setting', 'Setting')::find()->where(['keyword' => 'setting_collection', 'merchant_id' => $model->merchant_id, 'AppID' => $model->AppID])->select('content')->asArray()->one();
        if ($setting_data) {
            $setting_data['content'] = to_array($setting_data['content']);
            if (isset($setting_data['content']['trade_setting'])) {
                $trade_setting = $setting_data['content']['trade_setting'];
                if ($trade_setting['after_time']) {
                    $model->finish_time = (float) $trade_setting['after_time'] * 24 * 60 * 60 + time();
                }
                if ($trade_setting['evaluate_time']) {
                    $model->evaluate_time = (float) $trade_setting['evaluate_time'] * 24 * 60 * 60 + time();
                }
            }
        }
        $model->received_time = time();
        $model->status        = 203;
        if ($model->save()) {
            // $this->module->event->order_info = $model->toArray();
            // $this->module->trigger('statistical_order');
            return true;
        } else {
            Error('操作失败');
        }
    }

    /**
     * 订单预创建
     * @return [type] [description]
     */
    public function build($type = 'shop_order')
    {
        $consignee_info = Yii::$app->request->post('consignee_info', []);
        // if (empty($consignee_info)) {
        //     Error('收货人信息为空');
        // }

        $return_data = [];
        switch ($type) {
            //商城订单
            case 'shop_order':
                $result = $this->checkGoods();
                foreach ($result as $merchant_id => $value) {
                    $return_data[$merchant_id] = $this->getAmount($value, $consignee_info, $merchant_id);
                }

                break;

        }
        return $return_data;
    }

    /**
     * 商品库存检测及处理
     * @return [type] [description]
     */
    public function checkGoods()
    {
        $calculate  = Yii::$app->request->get('calculate', false); //判断是否是预请求
        $UID        = Yii::$app->user->identity->id;
        $goods_data = Yii::$app->request->post('goods_data', []);

        if (empty($goods_data)) {
            Error('商品为空');
        }

        $goods_id = array_unique(array_column($goods_data, 'goods_id'));
        //获取所购买商品的列表
        $goods_list     = M('goods', 'Goods')::find()->where(['id' => $goods_id])->with(['param', 'freight', 'package'])->asArray()->all();
        $return_data    = [];
        $failure_reason = ''; //param规格不存在  is_sale下架  delete商品不存在  stocks库存不足  limit限购  min低于起购数
        $failure_number = null;

        $goods_data_number_count = [];
        foreach ($goods_data as $goods) {
            if (isset($goods_data_number_count[$goods['goods_id']])) {
                $goods_data_number_count[$goods['goods_id']] += $goods['goods_number'];
            } else {
                $goods_data_number_count[$goods['goods_id']] = $goods['goods_number'];
            }
        }
        foreach ($goods_list as $value) {

            //判断是否有删除或者下架
            if ($value['is_recycle'] === 1 || $value['is_sale'] === 0) {
                if ($calculate == 'calculate') {
                    $failure_reason = $value['is_recycle'] === 1 ? 'delete' : 'is_sale';
                } else {
                    Error($value['name'] . '不存在或已下架');
                }

            }

            $value['freight']['freight_rules'] = $value['freight'] ? to_array($value['freight']['freight_rules']) : null;
            $value['package']['free_area']     = $value['package'] ? to_array($value['package']['free_area']) : null;
            $param_data                        = to_array($value['param']['param_data']);
            $slideshow                         = to_array($value['slideshow']); //轮播图
            $first_param_info                  = array_column($param_data[0]['value'], null, 'value'); //第一个规格信息

            foreach ($goods_data as $v) {
                //商品数据去除多余部分
                $v = [
                    'goods_id'     => $v['goods_id'],
                    'goods_sn'     => $v['goods_sn'],
                    'goods_param'  => $v['goods_param'],
                    'goods_number' => $v['goods_number'],
                ];

                //购买商品和商品列表一一匹配
                if ($v['goods_id'] == $value['id']) {
                    //商品规格信息
                    $goods_info = array_column($value['param']['goods_data'], null, 'param_value');
                    if (!isset($goods_info[$v['goods_param']])) {
                        if ($calculate == 'calculate') {
                            $failure_reason = 'param';
                        } else {
                            Error($value['name'] . '不存在' . $v['goods_param']);
                        }
                    }
                    //库存判断
                    if ($goods_info[$v['goods_param']]['stocks'] < $v['goods_number']) {
                        if ($calculate == 'calculate') {
                            $failure_reason = 'stocks';
                        } else {
                            Error($value['name'] . '库存不足');
                        }

                    }
                    //起购数量判断
                    if ($value['min_number'] > $goods_data_number_count[$v['goods_id']]) {
                        if ($calculate == 'calculate') {
                            $failure_reason = 'min';
                        } else {
                            Error($value['name'] . $value['min_number'] . '份起购');
                        }

                    }
                    //限购判断
                    if ($value['limit_buy_status'] === 1) {
                        switch ($value['limit_buy_type']) {
                            case 'day':
                                $limit_time     = strtotime(date('Y-m-d'));
                                $limit_buy_type = '本日';
                                break;
                            case 'week':
                                $limit_time     = mktime(0, 0, 0, date('m'), date('d') - date('w'), date('Y'));
                                $limit_buy_type = '本周';
                                break;
                            case 'month':
                                $limit_time     = strtotime(date('Y-m'));
                                $limit_buy_type = '本月';
                                break;
                            case 'all':
                                $limit_time     = 0;
                                $limit_buy_type = '';
                                break;

                            default:
                                Error('限购时间类型错误');
                                break;
                        }

                        $UID          = Yii::$app->user->identity->id;
                        $goods_number = M('order', 'OrderGoods')::find()
                            ->alias('goods')
                            ->joinWith([
                                'order as order',
                            ])
                            ->where(['and', ['>', 'order.status', 200], ['order.UID' => $UID, 'goods.goods_id' => $value['id']]])
                            ->SUM('goods.goods_number');
                        //算上当前购买量后的购买总数
                        if (($goods_number + $goods_data_number_count[$v['goods_id']]) > $value['limit_buy_value']) {
                            if ($calculate == 'calculate') {
                                $failure_reason = 'limit';
                                $failure_number = $value['limit_buy_value'];
                            } else {
                                $can_buy_num = $value['limit_buy_value'] - $goods_number;
                                if ($can_buy_num <= 0) {
                                    Error('您' . $limit_buy_type . '购买' . $value['name'] . '已达上限');
                                } else {
                                    Error('您' . $limit_buy_type . '还可以购买' . $value['name'] . ' ' . $can_buy_num . ' 份');
                                }
                            }

                        }
                    }

                    $first_param = explode('_', $v['goods_param'])[0]; //第一个规格
                    $goods_image = $param_data[0]['image_status'] && $first_param_info[$first_param]['image'] ? $first_param_info[$first_param]['image'] : $slideshow[0]; //存在规格图片则使用,不存在使用第一张轮播图

                    $show_goods_param = '';
                    $goods_param      = explode('_', $v['goods_param']);
                    foreach ($param_data as $key => $param_info) {
                        if ($param_info['name']) {
                            $show_goods_param .= $param_info['name'] . '：' . $goods_param[$key] . ' ';
                        } else {
                            $show_goods_param .= $goods_param[$key] . ' ';
                        }

                    }

                    $v['goods_name']       = $value['name'];
                    $v['show_goods_param'] = $show_goods_param;
                    $v['goods_price']      = $goods_info[$v['goods_param']]['price'];
                    $v['goods_cost_price'] = $goods_info[$v['goods_param']]['cost_price'] ? $goods_info[$v['goods_param']]['cost_price'] : 0;
                    $v['goods_weight']     = $goods_info[$v['goods_param']]['weight'] ? $goods_info[$v['goods_param']]['weight'] : 0;
                    $v['goods_image']      = $goods_image;
                    $v['freight']          = $value['freight'];
                    $v['package']          = $value['package'];
                    $v['ft_type']          = $value['ft_type'];
                    $v['ft_price']         = $value['ft_price'];
                    if ($calculate == 'calculate') {
                        $v['failure_reason'] = $failure_reason;
                        $v['failure_number'] = $failure_number;
                    }

                    if (array_key_exists($value['merchant_id'], $return_data)) {
                        array_push($return_data[$value['merchant_id']], $v);
                    } else {
                        $return_data[$value['merchant_id']] = [$v];
                    }
                }
            }
        }

        return $return_data;
    }

    /**
     * 金额计算
     * @return [type] [description]
     */
    public function getAmount($goods, $consignee_info, $merchant_id)
    {
        $calculate      = Yii::$app->request->get('calculate', false); //判断是否是预请求
        $number_amount  = 0; //商品总数
        $goods_amount   = 0; //商品总金额
        $freight_amount = 0; //总运费
        foreach ($goods as $v) {
            $number_amount += $v['goods_number'];
            $goods_amount += $v['goods_price'] * $v['goods_number'];
        }

        foreach ($goods as &$value) {
            $goods_number = $value['goods_number'];
            $goods_weight = $value['goods_number'] * $value['goods_weight'];
            $goods_price  = $value['goods_number'] * $value['goods_price'];

            if ($calculate == 'calculate' && empty($consignee_info)) {
                $UID            = Yii::$app->user->identity->id;
                $consignee_info = M("users", 'Address')::find()->where(['UID' => $UID, 'status' => 1])->asArray()->one();
            }

            $freight = 0;
            if (!empty($consignee_info)) {
                //计算初始运费
                if ($value['ft_type'] === 1) {
                    //固定邮费
                    $freight = $value['ft_price'] * $value['goods_number'];
                } else {
                    //运费模板
                    foreach ($value['freight']['freight_rules'] as $freight_rules) {
                        $province = array_column($freight_rules['area'], null, 'name');
                        if (array_key_exists($consignee_info['province'], $province)) {
                            $city = $province[$consignee_info['province']]['list'];
                            $city = array_column($city, null, 'name');
                            if (array_key_exists($consignee_info['city'], $city)) {
                                $district = $city[$consignee_info['city']]['list'];
                                $district = array_column($district, null, 'name');
                                if (array_key_exists($consignee_info['district'], $district)) {
                                    $freight += $freight_rules['first']['price']; //首件首重费用
                                    if ($value['freight']['type'] == 1) {
                                        //按件计算
                                        $f_number = $goods_number;
                                    } else {
                                        //按重计算
                                        $f_number = $goods_weight;
                                    }

                                    $continue = $f_number - $freight_rules['first']['number']; //判断是否超出首件数量或首重重量
                                    if ($continue > 0 && $freight_rules['continue']['number'] > 0) {
                                        $freight += ceil($continue / $freight_rules['continue']['number']) * $freight_rules['continue']['price'];
                                    }
                                }
                            }
                        }
                    }

                }

                //包邮计算
                if (is_array($value['package']['free_area'])) {
                    foreach ($value['package']['free_area'] as $free_area) {
                        $province = array_column($free_area['area'], null, 'name');
                        if (array_key_exists($consignee_info['province'], $province)) {
                            $city = $province[$consignee_info['province']]['list'];
                            $city = array_column($city, null, 'name');
                            if (array_key_exists($consignee_info['city'], $city)) {
                                $district = $city[$consignee_info['city']]['list'];
                                $district = array_column($district, null, 'name');
                                if (array_key_exists($consignee_info['district'], $district)) {
                                    switch ($value['package']['type']) {
                                        case 1:
                                            //订单满额
                                            $p_number = $goods_amount;
                                            break;
                                        case 2:
                                            //订单满件
                                            $p_number = $number_amount;
                                            break;
                                        case 3:
                                            //商品满额
                                            $p_number = $goods_price;
                                            break;
                                        case 4:
                                            //商品满件
                                            $p_number = $goods_number;
                                            break;
                                    }
                                    if ($p_number >= $free_area['number']) {
                                        $freight = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            unset($value['freight']);
            unset($value['package']);
            unset($value['ft_type']);
            unset($value['ft_price']);
            $value['total_amount'] = $goods_price;
            $value['pay_amount']   = $goods_price;
            $freight_amount += $freight;

        }

        $total_amount = $goods_amount + $freight_amount;
        $return_data  = [
            'total_amount'   => $total_amount,
            'goods_amount'   => $goods_amount,
            'pay_amount'     => $total_amount,
            'freight_amount' => $freight_amount,
            'merchant_id'    => $merchant_id,
            'goods_data'     => $goods,
        ];

        return $return_data;

    }

}
