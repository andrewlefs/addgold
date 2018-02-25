<?php
//MQ config
//$config['mq']['server'] = '10.10.20.92';
$config['mq']['server'] = '203.162.79.80'; //farmqueue.mobo.vn
$config['mq']['port'] = '5672';
$config['mq']['user'] = 'farm';
$config['mq']['password'] = 'Farm123';

//MQ chat config
$config['mq']['payment_mq_exchange'] = '';
$config['mq']['payment_mq_routing'] = 'inside.mobo.vn';
