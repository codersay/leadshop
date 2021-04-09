<?php
/**
 * @copyright ©2020 浙江禾成云计算有限公司
 * @link      : http://www.zjhejiang.com
 * Created by PhpStorm.
 * User: Andy - Wangjie
 * Date: 2021/1/27
 * Time: 9:43
 */

namespace users\models;


use yii\base\BaseObject;

class LoginUserInfo extends BaseObject
{
    public $nickname;
    public $username;
    public $avatar;
    public $gender;
    public $platform;

    /**
     * @var string $scope
     * auth_info 用户授权
     * auth_base 静默授权
     */
    public $scope = 'auth_info';
    public $openId = '';
    public $unionId = '';
    public $password = '';
}
