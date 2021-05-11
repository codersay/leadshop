<?php
defined('YII_DEBUG') or define('YII_DEBUG', false);
defined('YII_ENV') or define('YII_ENV', 'prod');
defined('URL_STRING') or define('URL_STRING', 'HESHOP_URL_STRING');
defined('SHOP_ENVIRONMENT') or define('SHOP_ENVIRONMENT', 'leadshop');
defined('WE7_URL') or define('WE7_URL', '');
defined('WE7_API') or define('WE7_API', '');
defined('WE7_ROOT') or define('WE7_ROOT', '');

error_reporting(E_ALL);

ini_set('display_errors', '1');

/**
 * 判断是否存在锁文件
 */
if (@file_exists(dirname(__DIR__) . "/install.lock")) {

    require __DIR__ . '/../vendor/autoload.php';

    require __DIR__ . '/../vendor/yiisoft/yii2/Yii.php';

    $config = require __DIR__ . '/../config/web.php';

    $leadmall = (new framework\leadmall($config));

    (new yii\web\Application($leadmall->config))->run();

} else {

    require __DIR__ . '/install.php';
}