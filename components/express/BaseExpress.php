<?php
/**
 * @copyright ©2020 浙江禾成云计算有限公司
 * Created by PhpStorm.
 * User: Andy - 阿德 569937993@qq.com
 * Date: 2021/1/18
 * Time: 11:21
 */


namespace app\components\express;

use app\components\core\HttpRequest;
use yii\base\BaseObject;

abstract class BaseExpress extends BaseObject
{
    use HttpRequest;

    /**@var string $url 接口*/
    protected $url;

    /**@var string $no 快递单号*/
    protected $no;

    /**@var array $config 第三方快递配置*/
    protected $config;

    abstract public function wrap($param);

    abstract public function getResult();

    abstract public function parseResult($content);

    public function query($param)
    {
        $this->wrap($param);
        return $this->parseResult($this->getResult());
    }

    protected function getConfig()
    {
        $config = M('setting', 'Setting')::find()->where(['keyword' => 'express_setting', 'merchant_id' => 1, 'AppID' => \Yii::$app->params['AppID']])->select('content')->asArray()->one();
        if ($config) {
            return json_decode($config['content'], true);
        }
        Error('请配置物流接口');
    }
}