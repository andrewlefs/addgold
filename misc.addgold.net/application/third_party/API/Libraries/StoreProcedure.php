<?php

class StoreProcedure {

    static public function call($name, $params, $db) {
        $array = array_fill(0, count($params), '?');
        $args = implode(',', $array);
        $query = "CALL {$name}($args)";
        $result = $db->query($query, $params);
        $db->freeDBResource($db->conn_id);
        //echo $db->last_query();
        return $result;
    }

}
