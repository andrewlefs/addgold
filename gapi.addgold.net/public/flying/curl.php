<?php

class Curl {
	private $timeout = 10;

	public function set_timeout($time){
		$this->timeout = $time;
	}

    public function execute($link){
		$curl = curl_init($link);
		curl_setopt($curl, CURLOPT_TIMEOUT, $this->timeout);
		curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $this->timeout);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_TIMEOUT, 5);
		//curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
		//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
		$response['data'] = @curl_exec($curl);
		$response['code'] = @curl_getinfo($curl, CURLINFO_HTTP_CODE);
		curl_close($curl);

		return $response;
	}

}

?>