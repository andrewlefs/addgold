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

$route['default_controller'] = "service";
$route['404_override'] = '';


$route['app/v(:any)/reqdm'] = 'app/home/reqdm/$1';
$route['app/reqdm'] = 'app/home/reqdm/$1';

//$route['app/init/(:any)'] = 'app/home/init/$1';
//$route['app/v(:any)/init'] = 'app/home/init/$1';
$route['app/init/(:any)'] = 'v1/AppController/init';
$route['app/v(:any)/init'] = 'v1/AppController/init';

$route["app/payment_list_store"] = 'app/home/paymentListStore';
$route['app/requests/(:num)/(:any)'] = 'app/home/requests/$1/$2';
$route['page/querystring'] = 'page/home/querystring';
$route['page/global_querystring'] = 'page/home/global_querystring';
$route['dialog/v(:any)/recharge/guide'] = 'dialog/recharge/guide/$1';

$route['app/v(:any)/paymentlist'] = 'app/home/paymentList/$1';
//portal
$route['portal/v1.0/app_init'] = 'app/portal/init/$1';


//payment
$route['payment/v(:any)/paymentlist'] = 'app/home/paymentList/$1';
$route['payment/v1.0/verify_google'] = 'app/v1/PayController/Verify_Google';
$route['payment/v1.0/verify_apple'] = 'app/v1/PayController/Verify_Apple';
$route['payment/v1.0/verify_wp'] = 'app/v1/PayController/Verify_WindowPhone';

//$route['app/v1.0/domain/list'] = 'app/v1/RequestDomain/DomainList';
$route['app/v1.0/domain/list'] = 'v1/AppController/domainList';
//payment 
$route["v1.0/dialog/paylist"] = "v1/PaymentController/PayListRecharge";
$route["v1.0/dialog/card"] = "v1/PaymentController/CardRecharge";
$route["v1.0/dialog/btce"] = "v1/PaymentController/BtceRecharge";
$route["v1.0/dialog/voucher"] = "v1/PaymentController/VoucherRecharge";

$route["v1.0/app/secret_list"] = "v1/AppController/SecretList";

$route["v1.0/track/install"] = "v1/TrackingController/TrackInstalled";
$route["v1.0/track/click"] = "v1/TrackingController/TrackClicked";
$route["v1.0/track/test"] = "v1/TrackingController/TrackTest";

$route["v1.0/approve_state"] = "v1/ApiController/StateApproved";

$route["forgot"] = "v1/TemplateController/index";
$route["events"] = "v1/TemplateController/index";
$route["supports"] = "v1/TemplateController/index";
$route["privacypolicy"] = "v1/TemplateController/index";

$route["home"] = "v1/HomeController/home";
$route["invite"] = "v1/HomeController/invite";
$route["level"] = "v1/HomeController/level";
$route["account"] = "v1/HomeController/account";

$route["v1.0/mem"] = "v1/MemcacheController/index";
$route["v1.0/mem/delete"] = "v1/MemcacheController/delete";

$route['app/testgetchannel'] = 'v1/TestController/testgetchannel';

$route['app/testinside'] = 'v1/TestController/test_inside';

$route['google'] = 'v1/GoogleController';
$route['google/getCallBack'] = 'v1/GoogleController/getCallBack';