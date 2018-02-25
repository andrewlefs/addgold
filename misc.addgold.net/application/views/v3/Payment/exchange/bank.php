<?php
if (is_array($exchangeRate)) {
    ?>
    <div class="shorten content constrain" style="padding: 0px">        
        <table id='history' class="mdl-data-table mdl-js-data-table mdl-shadow--2dp"><thead>
                <tr>
                    <th class="short-url mdl-data-table__cell--non-numeric">Ngân hàng</th>
                    <th class="short-url mdl-data-table__cell--non-numeric">Mệnh giá</th>
                    <th class="short-url mdl-data-table__cell--non-numeric">Tiền game</th>                                       
                </tr>
            </thead>           
            <tbody>
                <?php
                foreach ($exchangeRate as $key => $value) {
                    ?>
                    <tr>    
                        <td class="short-url mdl-data-table__cell--non-numeric">
                            <?php echo $value["sub_name"] ?>
                        </td>
                        <td class="short-url mdl-data-table__cell--non-numeric">
                            <?php echo number_format($value["money"], 0) ?> VNĐ
                        </td>
                        <td class="short-url mdl-data-table__cell--non-numeric">
                            <?php echo  number_format($value["knb"],0) . " " . $value["unit"] ?>
                        </td>                                                                        
                    </tr>
                    <?php
                }
                ?>
            </tbody>
        </table>   
    </div>
<?php } ?>
