<div>
    <input type="hidden" value="<?php echo $csrfToken ?>" id="csrfToken" name="csrfToken" />
    <input type="hidden" value="" id="card-type" name="card-type" />
    <input type="hidden" value="<?php echo $token; ?>" id="card-token" name="card-token" />    
    <div class="panel-group">
        <select id="cardList" class="form-control" >
            <option value="">Chọn Loại Thẻ</option>
            <option value="gate">Gate</option>
            <option value="vms">Mobi</option>
            <option value="vina">Vinaphone</option>
            <option value="viettel">Viettel</option>
        </select>        
    </div>    
    <div class="step-2 panel-group" style="display: none;">        
        <table>
            <tbody>
                <tr>
                    <td><label>Số Serial:</label></td>                    
                </tr>
                <tr>                   
                    <td><input class="text form-control" name="serial" id="serial" type="text"></td>
                </tr>
                <tr>
                    <td><label>Số PIN:</label></td>                    
                </tr>
                <tr>                    
                    <td><input class="text form-control" name="pin" id="pin" type="text"></td>
                </tr>
                <tr>                    
                    <td colspan="2"><div class="ajax-content" style="display: none;"></div></td>
                </tr>
                <?php if ($_SESSION["submit"] >= 5) { ?>
                    <tr><td colspan="2">
                            <div class="box_captcha" style="display: none">
                                <label>Mã xác nhận:</label>
                                <input style="width:30%;" class="text" name="captcha" type="text">
                                <img class="captcha" src="/captcha">
                                <input type="button" class="generate" value="">
                            </div>
                        </td></tr>
                <?php } ?>
                <tr>                    
                    <td colspan="2"><input class="submit button-submit" id="button-card" type="button" value="Nạp thẻ"></td>
                </tr>

            </tbody>
        </table>                
    </div>

</div>
