<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Misc\Http\Client;

use Misc\Http\Client\ClientCurl;
use Misc\Http\RequestInterface;
use Misc\Http\Request;
use Misc\Http\ResponseInterface;
use Misc\Http\Headers;
use Misc\Http\Client\ClientInterface;
use Misc\Http\Parameters;
use Misc\Http\Adapter\CurlAdapter;
use Misc\Http\Response;
use Misc\Http\Exception\EmptyResponseException;
use Misc\Http\Exception\InvalidArgumentException;
use Misc\Http\Exception\RequestException;
use Misc\Http\Util;
use Misc\Security;
use Misc\Http\Receiver;
use Misc\Api;
use Misc\Http\Exception\AuthorizationGoogleException;

class GoogleClient extends Client implements ClientInterface {

    static $DOMAIN_MAP = array(
        OAUTH2_REVOKE_URI => 'https://accounts.google.com/o/oauth2/revoke',
        OAUTH2_TOKEN_URI => 'https://accounts.google.com/o/oauth2/token',
        OAUTH2_AUTH_URL => 'https://accounts.google.com/o/oauth2/auth',
        OAUTH2_FEDERATED_SIGNON_CERTS_URL => 'https://www.googleapis.com/oauth2/v1/certs',
        API_BASE_PATH => 'https://www.googleapis.com'
    );
    private $defaultService = array(
        'authorization_token_url' => 'https://www.google.com/accounts/OAuthAuthorizeToken',
        'request_token_url' => 'https://www.google.com/accounts/OAuthGetRequestToken',
        'access_token_url' => 'https://www.google.com/accounts/OAuthGetAccessToken');

    const LIBVER = "2.2.0";
    const USER_AGENT_SUFFIX = "google-api-php-client/";

    /**
     *
     * @var type 
     */
    protected $receive;
    protected $developer;
    public $accessType = 'offline';
    public $approvalPrompt = 'force';
    protected $services = array();

    public function __construct() {
        $this->setApp("450048383416-6ffcf6qtrk8milmm17r332vkcj8s3lrh.apps.googleusercontent.com");
        $this->setSecret("BKiedmNR7fJcz8YMGzVFviXF");
        /*
        $this->setApp("40037078580-nnkm7o9c1lertamt704f0ekstq2guhng.apps.googleusercontent.com");
        $this->setSecret("Xtns5NZ3iq34SP_FXqLGqq5V");
        */
        $this->setDefaultBaseDomain("google.com");
        $this->setDefaultLastLevelDomain("accounts");
        $this->getRequestPrototype()->setProtocol("https://");
    }
    /*
     * key chien tank
     * Client ID
450048383416-6ffcf6qtrk8milmm17r332vkcj8s3lrh.apps.googleusercontent.com
Client secret
BKiedmNR7fJcz8YMGzVFviXF
     */

    function getReceive() {
        if ($this->receive == null)
            $this->receive = new Receiver ();
        return $this->receive;
    }

    function setReceive($receive) {
        $this->receive = $receive;
    }

    /**
     * Prepare Service Google Authorize Token
     * @return type array
     */
    public function prepareService() {
        $service = $this->defaultService;
        $scopes = array('https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email');
        if ($this->scopes) {
            $scopes = $this->scopes;
        } else {
            foreach ($this->services as $key => $val) {
                if (isset($val['scope'])) {
                    if (is_array($val['scope'])) {
                        $scopes = array_merge($val['scope'], $scopes);
                    } else {
                        $scopes[] = $val['scope'];
                    }
                } else {
                    $scopes[] = 'https://www.googleapis.com/auth/' . $key;
                }
                unset($val['discoveryURI']);
                unset($val['scope']);
                $service = array_merge($service, $val);
            }
        }
        $service['scope'] = implode(' ', $scopes);
        return $service;
    }

    /**
     * Authorization from code receive access token by Google authen api
     * @param type $code
     * @param type $redirect_uri
     * @return boolean
     */
    public function getAccessTokenFromCode($code, $redirect_uri = null) {
        if (empty($code)) {
            return false;
        }

        if ($redirect_uri === null) {
            $redirect_uri = $this->getReceive()->getCurrentUrl();
        }

        try {
            // need to circumvent json_decode by calling _oauthRequest
            // directly, since response isn't JSON format.
            $api = new Api($this);
            $access_token_response = $api->call('/o/oauth2/token', "POST", array(
                'code' => $code,
                'grant_type' => 'authorization_code',
                'redirect_uri' => $redirect_uri,
                'client_id' => $this->getApp(),
                'client_secret' => $this->getSecret(),
            ));
        } catch (AuthorizationGoogleException $e) {
            // most likely that user very recently revoked authorization.
            // In any event, we don't have an access token, so say so.
            return false;
        }

        if (empty($access_token_response)) {
            return false;
        }

        $response_params = $access_token_response->getContent();

        if (!isset($response_params['access_token'])) {
            return false;
        }

        return $response_params['access_token'];
    }

    function getDeveloper() {
        return $this->developer;
    }

    function getAccessType() {
        return $this->accessType;
    }

    function getApprovalPrompt() {
        return $this->approvalPrompt;
    }

    function setDeveloper($developer) {
        $this->developer = $developer;
    }

    function setAccessType($accessType) {
        $this->accessType = $accessType;
    }

    function setApprovalPrompt($approvalPrompt) {
        $this->approvalPrompt = $approvalPrompt;
    }


    public function getCheckRefun($params = array(), $currentUrl = "") {
        $this->establishCSRFTokenState();

        if ($currentUrl == "")
            $currentUrl = (new Receiver())->getUrl();

        $service = $this->prepareService();

        return $this->buildUrl(
            'OAUTH2_AUTH_URL', '', array_merge(
            array(
                'response_type' => 'code',
                'redirect_uri' => $currentUrl,
                'client_id' => $this->getApp(),
                'scope' => $service['scope'],
                'access_type' => $this->getAccessType(),
                'approval_prompt' => $this->getApprovalPrompt(),
                'state' => $this->state,
            ), $params
        ));
    }

    /**
     * Get a Login URL for use with redirects. By default, full page redirect is
     * assumed. If you are using the generated URL with a window.open() call in
     * JavaScript, you can pass in display=popup as part of the $params.
     *
     * The parameters:
     * - redirect_uri: the url to go to after a successful login
     * - scope: comma separated list of requested extended perms
     *
     * @param array $params Provide custom parameters
     * @return string The URL for the login flow
     */
    public function getLoginUrl($params = array(), $currentUrl = "") {
        $this->establishCSRFTokenState();

        if ($currentUrl == "")
            $currentUrl = (new Receiver())->getUrl();

        $service = $this->prepareService();

        return $this->buildUrl(
                        'OAUTH2_AUTH_URL', '', array_merge(
                                array(
                    'response_type' => 'code',
                    'redirect_uri' => $currentUrl,
                    'client_id' => $this->getApp(),
                    'scope' => $service['scope'],
                    'access_type' => $this->getAccessType(),
                    'approval_prompt' => $this->getApprovalPrompt(),
                    'state' => $this->state,
                                ), $params
        ));
    }

    /**
     * Build the URL for given domain alias, path and parameters.
     *
     * @param string $name   The name of the domain
     * @param string $path   Optional path (without a leading slash)
     * @param array  $params Optional query parameters
     *
     * @return string The URL for the given parameters
     */
    protected function buildUrl($name, $path = '', $params = array()) {

        $url = self::$DOMAIN_MAP[$name];
        if ($path) {
            if ($path[0] === '/') {
                $path = substr($path, 1);
            }
            $url .= $path;
        }
        if ($params) {
            $url .= '?' . http_build_query($params, null, '&');
        }

        return $url;
    }


    /**
     * For backwards compatibility
     * alias for fetchAccessTokenWithAuthCode
     *
     * @param $code string code from accounts.google.com
     * @return array access token
     * @deprecated
     */
    public function authenticate($code)
    {
        return $this->fetchAccessTokenWithAuthCode($code);
    }
    /**
     * Attempt to exchange a code for an valid authentication token.
     * Helper wrapped around the OAuth 2.0 implementation.
     *
     * @param $code string code from accounts.google.com
     * @return array access token
     */
    public function fetchAccessTokenWithAuthCode($code)
    {
        if (strlen($code) == 0) {
            throw new InvalidArgumentException("Invalid code");
        }

        $auth = $this->getOAuth2Service();
        $auth->setCode($code);
        $auth->setRedirectUri($this->getRedirectUri());

        $httpHandler = HttpHandlerFactory::build($this->getHttpClient());
        $creds = $auth->fetchAuthToken($httpHandler);
        if ($creds && isset($creds['access_token'])) {
            $creds['created'] = time();
            $this->setAccessToken($creds);
        }

        return $creds;
    }
    private $auth;
    /**
     * @return string
     */
    public function getOAuth2Service()
    {
        if (!isset($this->auth)) {
            $this->auth = $this->createOAuth2Service();
        }

        return $this->auth;
    }
    /**
     * create a default google auth object
     */
    protected function createOAuth2Service()
    {
        $auth = new OAuth2(
            [
                'clientId' => $this->getClientId(),
                'clientSecret' => $this->getClientSecret(),
                'authorizationUri' => self::OAUTH2_AUTH_URL,
                'tokenCredentialUri' => self::OAUTH2_TOKEN_URI,
                'redirectUri' => $this->getRedirectUri(),
                'issuer' => $this->config['client_id'],
                'signingKey' => $this->config['signing_key'],
                'signingAlgorithm' => $this->config['signing_algorithm'],
            ]
        );

        return $auth;
    }
    /*
     * service account id: voided-purchase-api@youwin-1385.iam.gserviceaccount.com
key id: 01c33851744c3d1f081fa4960ad3a87bf5481d69
Client ID: 107658451739585133418 ==> cần thì dùng
email: mestore@mecorp.vn ==> cần thì dùng
     */
}

