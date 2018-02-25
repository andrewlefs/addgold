<?php

use GraphApi\Object\Values\DBKeys;
use GraphApi\Object\Fields\DBTableFields;

class m_graph extends CI_Model {

    protected $_db;
    protected $_db_slave;
    public $event_id;

    public function __construct() {
        if (empty($this->_db_slave))
            $this->_db_slave = $this->load->database(array('db' => 'system_info', 'type' => 'slave'), true);
        if (!$this->_db)
            $this->_db = $this->load->database(array('db' => 'system_info', 'type' => 'master'), TRUE);
    }

    public function getProfileAccessToken($access_key) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::ACCESS_KEY, $access_key)
                ->get(DBKeys::TABLE_LOGIN);
        // var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getEvent($event_id) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::EVENT_ID, $event_id)
                ->get(DBKeys::TABLE_GRAPH_EVENT);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getRequest($unique_key) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->get(DBKeys::TABLE_STOTE_REQUEST);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getLastShare($unique_key) {
        $query = $this->_db->select("create_date", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->order_by(DBTableFields::CREATE_DATE, "DESC")
                ->limit(1)
                ->get(DBKeys::TABLE_SHARE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getLastInvite($unique_key) {
        $query = $this->_db->select("create_date", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->order_by(DBTableFields::CREATE_DATE, "DESC")
                ->limit(1)
                ->get(DBKeys::TABLE_INVITE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getCountShareByDay($unique_key) {
        $query = $this->_db->select("count(0) as `count`", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->group_by(DBTableFields::UNIQUE_KEY)
                ->get(DBKeys::TABLE_AWARD_SHARE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getTotalShareByDay($unique_key) {
        $query = $this->_db->select("count(0) as `count`", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->group_by(DBTableFields::UNIQUE_KEY)
                ->get(DBKeys::TABLE_SHARE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getCountInviteByDay($unique_key) {
        $query = $this->_db->select("sum(item_count) as `count`", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->group_by(DBTableFields::UNIQUE_KEY)
                ->get(DBKeys::TABLE_AWARD_INVITE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getTotalInviteByDay($unique_key) {
        $query = $this->_db->select("count(0) as `count`", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->group_by(DBTableFields::UNIQUE_KEY)
                ->get(DBKeys::TABLE_INVITE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getTotalAccepts($unique_key) {
        $query = $this->_db->select("count(0) as `count`", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->group_by(DBTableFields::UNIQUE_KEY)
                ->get(DBKeys::TABLE_AWARD_ACCEPT_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getListAccept($unique_key, $day) {
        $oneDay = 24 * 60 * 60;
        $currentDay = strtotime(date("Y-m-d", time()));
        $expiredDay = $currentDay - $oneDay * $day;

        $query = $this->_db->select(DBTableFields::ID . "," . DBTableFields::NAME . "," . DBTableFields::CREATE_DATE . "," . DBTableFields::UNIQUE_KEY . "," . DBTableFields::EXCLUDED_TOKEN . "," . DBTableFields::DAY . "," . DBTableFields::LINK_PICTURE, false)
                ->where(DBTableFields::EXCLUDED_TOKEN, $unique_key)
                ->where(DBTableFields::CREATE_DATE . " > ", date("Y-m-d", $expiredDay))
                ->where(DBTableFields::STATUS, 0)
                ->group_by(DBTableFields::UNIQUE_KEY . "," . DBTableFields::EXCLUDED_TOKEN . "," . DBTableFields::DAY)
                ->get(DBKeys::TABLE_EXCLUDED_LOGS);
        // var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function getAwardLists($table, $unique_key, $day) {
        $oneDay = 24 * 60 * 60;
        $currentDay = strtotime(date("Y-m-d", time()));
        $expiredDay = $currentDay - $oneDay * $day;

        $query = $this->_db->select("*", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::CREATE_DATE . " >", date("Y-m-d", $expiredDay))
                ->order_by(DBTableFields::CREATE_DATE, "desc")
                ->get($table);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function getAcceptExists($unique_key, $transId) {

        $query = $this->_db->select("*", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::TRANSID, $transId)
                ->get(DBKeys::TABLE_AWARD_ACCEPT_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getItems($game_id) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::GAME_ID, $game_id)
                ->where(DBTableFields::STATUS, 1)
                ->get(DBKeys::TABLE_ITEMS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function getExcludes($unique_key) {
        $query = $this->_db->select("distinct excluded_token", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->where(DBTableFields::DAY, date("Ymd", time()))
                ->get(DBKeys::TABLE_EXCLUDED_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function getLike($unique_key) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::UNIQUE_KEY, $unique_key)
                ->get(DBKeys::TABLE_AWARD_LIKE_LOGS);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function getGameInfo($game_id) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::GAME_ID, $game_id)
                ->get(DBKeys::TABLE_GRASH);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->row_array() : FALSE;
    }

    public function getDataShare($game_id) {
        $query = $this->_db->select("*", false)
                ->where(DBTableFields::GAME_ID, $game_id)
                ->where(DBTableFields::STATUS, 1)
                ->where("date < now()", "", false)
                ->get(DBKeys::TABLE_SHARE_DATA);
        //var_dump($this->_db->last_query());
        //die;
        return ($query != FALSE) ? $query->result_array() : FALSE;
    }

    public function insert_on_duplicate_login($table, $data) {
        $query = FALSE;
        if (is_array($data)) {
            $sql = $this->_db->insert_string($table, $data)
                    . " ON DUPLICATE KEY UPDATE access_token='{$data["access_token"]}'"
                    . ", fbid = '{$data["fbid"]}', fbname ='{$data["fbname"]}',"
                    . "link_picture ='{$data["link_picture"]}',"
                    . "token_picture ='{$data["token_picture"]}'";
//            echo $sql;die;
//            echo $this->_db->last_query();die;
            $query = $this->_db->query($sql);
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    public function storeDuplicateRequest($table, $data) {
        $query = FALSE;
        if (is_array($data)) {
            $sql = $this->_db->insert_string($table, $data)
                    . " ON DUPLICATE KEY UPDATE " . DBTableFields::PARAMETERS . "='{$data[DBTableFields::PARAMETERS]}'";
//            echo $sql;die;
//            echo $this->_db->last_query();die;
            $query = $this->_db->query($sql);
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    public function insert($table, $data) {
        $query = FALSE;
        //var_dump($data);
        if (is_array($data)) {
            $query = $this->_db->insert($table, $data);
            //echo $this->_db->last_query();die;
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    public function insert_batch($table, $data) {
        $query = FALSE;
        //var_dump($data);
        if (is_array($data)) {
            $query = $this->_db->insert_batch($table, $data);
            //echo $this->_db->last_query();die;
        }
        return (empty($query) == FALSE) ? $this->_db->insert_id() : 0;
    }

    //cập nhật số lượt
    public function update($table, $data, $where) {

        $sql = $this->_db->update($table, $data, $where);
        // var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

    //cập nhật số lượt
    public function update_batch($table, $data, $id) {

        $sql = $this->_db->update_batch($table, $data, $id);
        // var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

    //cập nhật số lượt
    public function delete($table, $where) {

        $sql = $this->_db->delete($table, $where);
        // var_dump($this->_db->last_query());die;
        return $this->_db->affected_rows();
    }

}
