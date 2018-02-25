<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once __DIR__ . '/amqplib/autoload.php';
use PhpAmqpLib\Connection\AMQPConnection;
use PhpAmqpLib\Message\AMQPMessage;

class MqClass{
    public $connection;
    public $channel;

    function __construct(){		
        $CI =& get_instance();
        $CI->load->config('mq_setting');
        $mq_cfg = $CI->config->item('mq');
		//echo '<pre>';
		//print_r($mq_cfg);die;
        //To init a connnection;
        if(!$this->connection){
            $this->connection = new AMQPConnection($mq_cfg['server'], $mq_cfg['port'], $mq_cfg['user'], $mq_cfg['password']);
            $this->channel = $this->connection->channel();
			//var_dump($this->channel);die;
        }
    }

    //To send a message
    //Return 1: successful, 0: error
    public function send($routing_key, $exchange, $message){
        $queue = $routing_key;		
        if($routing_key != null or $message != null){
            //$this->channel->queue_declare($queue, false, true, false, false); #disable
            //$this->channel->exchange_declare($exchange, false, false, false, false);
            //$this->channel->queue_bind($queue, $exchange, $routing_key); #disable
            $mq_msg = new AMQPMessage($message);
            $this->channel->basic_publish($mq_msg, $exchange, $routing_key);
            $this->channel->close();
            $this->connection->close();
            return 1;
        } else{
            return 0;
        }
    }

    //To receive a message or null;
    public function receive($routing_key){
        if($routing_key != null){
            $this->channel->queue_declare($routing_key, false, false, false, false);
            $this->channel->basic_consume($routing_key, '', false, true, false, false, $this->processMessage);
            while(count($this->channel->callbacks)) {
                $this->channel->wait();
            }
        } else{
            return null;
        }
    }

    private function processMessage($message, $queue){
        return $message;
    }
}