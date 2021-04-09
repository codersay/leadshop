<?php
/**
 * 设置管理
 * @link http://www.heshop.com/
 * @copyright Copyright (c) 2020 HeShop Software LLC
 * @license http://www.heshop.com/license/
 */
namespace setting\api;

use framework\common\BasicController;
use Yii;

class IndexController extends BasicController
{
    /**
     * 重写父类
     * @return [type] [description]
     */
    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['update']);
        return $actions;
    }

    public function actionView()
    {
        return '占位方法';
    }

    public function actionUpdate()
    {
        return '占位方法';
    }

    public function actionDelete()
    {
        return '占位方法';
    }

    /**
     * 获取设置列表
     * @return [type] [description]
     */
    public function actionIndex()
    {
        $merchant_id = 1;
        $AppID       = Yii::$app->params['AppID'];
        $where       = [
            'merchant_id' => $merchant_id,
            'AppID'       => $AppID,
        ];
        $data = M()::find()->where($where)->select('keyword,content')->asArray()->all();
        foreach ($data as &$value) {
            $value['content'] = to_array($value['content']);
        }
        return str2url($data);
    }

    /**
     * 设置搜索
     * @return [type] [description]
     */
    public function actionSearch()
    {
        $keyword     = Yii::$app->request->post('keyword', false);
        $content_key = Yii::$app->request->post('content_key', false);
        $merchant_id = 1;
        $AppID       = Yii::$app->params['AppID'];
        $where       = [
            'keyword'     => $keyword,
            'merchant_id' => $merchant_id,
            'AppID'       => $AppID,
        ];

        $data = M()::find()->where($where)->select('keyword,content')->asArray()->one();

        if ($data) {
            $data['content'] = to_array($data['content']);
            if ($content_key) {
                if (isset($data['content'][$content_key])) {
                    return str2url($data['content'][$content_key]);
                } else {
                    Error('内容不存在');
                }

            }
            return str2url($data);
        } else {
            Error('设置不存在');
        }
    }

    /**
     * 保存设置
     * @return [type] [description]
     */
    public function actionCreate()
    {

        if (!N('keyword') || !N('content')) {
            Error('缺少参数');
        }
        $post        = Yii::$app->request->post();
        $merchant_id = 1;
        $AppID       = Yii::$app->params['AppID'];

        $model = M()::find()->where(['merchant_id' => $merchant_id, 'AppID' => $AppID, 'keyword' => $post['keyword']])->one();

        if (empty($model)) {
            $model              = M('setting', 'Setting', true);
            $model->keyword     = $post['keyword'];
            $model->merchant_id = $merchant_id;
            $model->AppID       = $AppID;
        }

        $post['content'] = url2str($post['content']);
        $model->content = to_json($post['content']);
        if ($model->save()) {
            return true;
        } else {
            Error('保存失败');
        }
    }
}
