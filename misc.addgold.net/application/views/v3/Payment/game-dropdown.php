<div class="game-dropdown col-xs-6">
    <select id="game-list" class="form-control">      
        <option value="0" >Chọn Game</option>
        <?php
        foreach ($gameList as $key => $value) {
            if ($value["publish"] == 0 && !in_array(Misc\Http\Util::get_remote_ip(), array("127.0.0.1", "118.69.76.212", "115.78.161.88", "115.78.161.124", "115.78.161.134"))) {
                continue;
            }
            ?>
            <option value="<?php echo $value["app_id"] ?>" <?php echo $value["app_id"] == $gameId ? "selected='selected'" : "" ?>><?php echo $value["name"] ?></option>
            <?php
        }
        ?>  
    </select>
</div>    