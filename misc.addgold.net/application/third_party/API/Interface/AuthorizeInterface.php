<?php

interface API_Interface_AuthorizeInterface extends API_Response_ResponseInterface {

    public function validateAuthorizeRequest(API_RequestInterface $request, $scope = array());    
}