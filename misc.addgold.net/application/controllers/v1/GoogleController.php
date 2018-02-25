<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require_once APPPATH . 'core/v1/Controller.php';
require_once APPPATH . 'controllers/v1/autoloader.php';


include_once APPPATH . 'core/v1/Http/Client/vendor/autoload.php';

use Misc\Controller;
use Misc\Object\Values\ResultObject;
use Misc\Security;
use Misc\Models\PaymentModels;
use Misc\Models\GiftCodeModels;


class GoogleController extends Controller
{

    protected $giftcodeModel;
    protected $getGinside;
    protected $paymentModel;

    public function __construct()
    {
        parent::__construct();
        $this->setPathRoot("google/");
    }


    /**
     *
     * @return GInsideClient
     */
    public function getGinsideClient()
    {
        if ($this->getGinside == null) {
            $this->getGinside = new GInsideClient();
        }
        return $this->getGinside;
    }
    /**
     *
     * @return GiftCodeModels
     */
    public function getGiftCodeModel()
    {
        if ($this->giftcodeModel == null) {
            $this->giftcodeModel = new GiftCodeModels($this->getDbConfig(), $this);
        }
        return $this->giftcodeModel;
    }

    /**
     *
     * @return PaymentModels
     */
    public function getPaymentModel() {
        if ($this->paymentModel == null) {
            $this->paymentModel = new PaymentModels($this->getDbConfig(), $this);
        }
        return $this->paymentModel;
    }

    public function index()
    {
        $this->addData("form", "nap");
        if (isset($_SESSION["loginInfo"])) {

            $this->Render("index");
        } else {
            $getUrl = $this->getGoogleClient()->getLoginUrl(array(),"http://local.misc.addgold.net/google/callback");
            header("location:".$getUrl);
        }
    }

    public function getCallBack(){
        $params = $this->getReceiver()->getQueryParams();

        //var_dump(openssl_get_cert_locations()); die;
        $client = new Google_Client();

        if ($credentials_file = $this->getGoogleBase()->checkServiceAccountCredentialsFile()) {
            // set the location manually
            $client->setAuthConfig($credentials_file);
        } elseif (getenv('GOOGLE_APPLICATION_CREDENTIALS')) {
            // use the application default credentials
            $client->useApplicationDefaultCredentials();
        } else {
            echo $this->getGoogleBase()->missingServiceAccountDetailsWarning();
            return;
        }

        $client->setApplicationName("Client_Library_Examples");
        $client->setScopes(['https://www.googleapis.com/auth/androidpublisher']);




        $service = new Google_Service_AndroidPublisher($client);

        //$optParams = array('productId','purchaseToken');

        $optParams = array();
        //$optParams = array("startTime"=>(strtotime("-29 days") * 1000 ),"endTime"=> (strtotime("-29 days") * 1000 ) );
        $result = $service->purchases_voidedpurchases->listPurchasesVoidedpurchases("monggiangho.vn.game.mobo",$optParams);

        $getVoidedPurch = $result->getVoidedPurchases();
        $resultDate = array();
        if(is_array($getVoidedPurch)){
            foreach ($getVoidedPurch as $voided){

                $purchase = $voided->getPurchaseToken();
                $voidedTime = date('Y-m-d H:i:s',$voided->getVoidedTimeMillis());
                //call model
                //where purchase_token
                $resultDate = array();

            }
            
        }
        if ($resultDate){
            echo json_encode($resultDate);
        }


    }

}
