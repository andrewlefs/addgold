<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/

$route['default_controller'] = "v1/PaymentController/index";
$route['404_override'] = 'v1/ShortLinkController/getShortLink';

$route["v1.0/mem"] = "v1/MemcacheController/index";
$route["v1.0/mem/delete"] = "v1/MemcacheController/delete";
$route["v1.0/mem/clear"] = "v1/MemcacheController/clearAll";

$route["login.html"] = "v1/PaymentController/login";
$route["oauth.html"] = "v1/PaymentController/oauth";
$route["authorize"] = "v1/PaymentController/authorize";
$route["logout.html"] = "v1/PaymentController/logout";
$route["nap-(:any).html"] = "v1/PaymentController/nap/$1";
$route["ty-gia-(:any).html"] = "v1/PaymentController/exchangeRate/$1";
$route["form-ty-gia.html"] = "v1/PaymentController/exchangeRateView";
$route["huong-dan.html"] = "v1/PaymentController/huongdan";
$route["khuyen-mai.html"] = "v1/PaymentController/khuyenmai";
$route["lich-su.html"] = "v1/PaymentController/lichsu";
$route["ho-tro.html"] = "v1/PaymentController/hotro";
$route["search"] = "v1/PaymentController/search";
$route["captcha"] = "v1/PaymentController/captcha";
$route["topup"] = "v1/PaymentController/topupRequest";
$route["result-(:any).html"] = "v1/PaymentController/displayResult/$1";
$route["postback-(:any).html"] = "v1/PaymentController/postBack/$1";
$route["query"] = "v1/PaymentController/query";
$route["query_momo_detail"] = "v1/PaymentController/queryMoMoDetail";

$route["v1.0/momopay/notify"] = "v1/MomoController/notify";
$route["v1.0/pay_list"] = "v1/PaymentController/payList";
$route["v1.0/card"] = "v1/PaymentController/payCard";

$route["giftcode-(:any).html"] = "v1/PaymentController/giftCode/$1";

$route["topupgiftcode"] = "v1/GiftcodeController/topgiftcode";
