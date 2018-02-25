</div>

</div>

</div>
<footer>
    <div class="container">
        <div class="left">
            <img src="/v3/nap/images/icon-email.png" class="img-responsive"/>
            <span>Sản phẩm nổi bật</span>
        </div>
        <div class="right">
            <img src="/v3/nap/images/icon-fb.png" class="img-responsive"/>
            <span>facebook.com/langgame.net/</span>
        </div>
    </div>
</footer>
</div>


<script type="text/javascript" src="/v3/nap/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/v3/nap/js/jquery.validate.js"></script>
<script type="text/javascript" src="/v3/nap/js/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/v3/nap/js/jQuery-fn-Extend.js"></script>
<script type="text/javascript" src="/v3/nap/js/script.js"></script>
<script type="text/javascript" src="/v3/nap/js/customer.js"></script>



<script type="text/javascript" src="/v3/nap/js/owl.carousel/owl.carousel.min.js"></script>

<script type="text/javascript">
    $(document).ready(function () {
        var display = {};
        var type = '';
        var bankType = "";
        var castData = {};
        var castDis = {};

        $(".action-bar-menu-button").click(function () {
            $(".mobile-nav").css({"margin-left": "0px"});
            $(".mobile-nav").toggle();
            $("#mobile-menu-overlay").toggle();
        });

        $("#submitCharacter").validate({

            rules: {
                character: {
                    required: true
                },
                serverlist: {
                    required: true
                }
            },
            messages: {
                serverlist: {required: ""},
                character: {required: ""}
            }
        });
        var gettype = "card";
        $("#submitCharacter").submit(function (event) {
            event.preventDefault();
            // Get some values from elements on the page:
            //
            var $form = $(this),
                data = $(this).serializeArray(),
                url = $form.attr("action");

            castDis = data;
            for (var key in data) {
                castData[data[key].name] = data[key].value;
            }

            if (castData["serverlist"] == "") {
                $("body").customNotify({type: "error", text: "Vui lòng chọn server"});
                $("body").customStopLoading();
                return false;
            }
            if (castData["character"] == "") {
                $("body").customNotify({type: "error", text: "Vui lòng chọn nhân vật"});
                //console.log("error");
                $("body").customStopLoading();

                return false;
            }


            //game info
            display['game'] = {name: $(".game-list-name").text(), id: $("#game-list").val()};
            //server info
            display['server'] = {
                name: $("#serverlist option:selected").text(),
                id: $("#serverlist option:selected").val()
            };
            //character info
            display['character'] = {
                name: $("#character option:selected").text(),
                id: $("#character option:selected").val()
            };
            //formality promo

            display['payment_type'] = gettype;


            $("body").customStopLoading();

            $("#group-character").css({"left": "-100%"});
            if (gettype == 'gift') {
                $("#group-giftcode").fadeIn();
                $("#group-giftcode").css({"left": "0"});
            } else {
                $("#group-card").fadeIn();
                $("#group-card").css({"left": "0"});
            }

            $("#group-character").fadeOut();

        });
        $(".next").click(function () {
            $("body").customLoading();
            $('#submitCharacter').submit();
        });
        $(".next_giftcode").click(function () {
            gettype = "gift";
            $("body").customLoading();
            $('#submitCharacter').submit();
        });
        /*
         $("#group-character").css({"left": "-100%"});
         $("#group-card").fadeIn();
         $("#group-card").css({"left": "0"});
         $("#group-character").fadeOut();
         */
        $(".previous").click(function () {
            $("#group-card").css({"left": "100%"});
            $("#group-card").fadeOut();
            $("#group-character").fadeIn();
            $("#group-character").css({"left": "0"});
        });

        $("#submitCard").validate({

            rules: {
                character: {
                    required: true
                },
                serverlist: {
                    required: true
                }
            },
            messages: {
                serverlist: {required: ""},
                character: {required: ""}
            }
        });
        $("#submitCard").submit(function (event) {
            event.preventDefault();
            // Get some values from elements on the page:
            //
            var $form = $(this),
                data = $(this).serializeArray(),
                url = $form.attr("action");

            data = data.concat(castDis);
            for (var key in data) {
                castData[data[key].name] = data[key].value;
            }
            castData["formality"] = 'mcard';
            castData["formality_text"] = 'Thẻ cào';

            if ($('#group-card input:radio:checked').length <= 0) {
                $("body").customStopLoading();
                $("body").customNotify({type: "error", text: "Vui lòng chọn loại thẻ để nạp"});
                return false;
            }
            if (castData["serial"] == "" || castData["pin"] == "") {
                $("body").customStopLoading();
                $("body").customNotify({type: "error", text: "Vui lòng nhập số Serial và Mã Pin."});
                return false;
            }

            display['promo'] = {
                name: $("#card_type option:selected").text(),
                id: $("#card_type option:selected").val()
            };
            //formality info

            display['formality'] = {
                name: castData["formality_text"],
                id: castData["formality"],
                service_name: castData['cardType'],
                service_id: castData['cardType']
            };
            type = castData['cardType'];

            data[data.length] = {name: 'display', value: JSON.stringify(display)};
            data[data.length] = {name: 'type', value: type};
            data[data.length] = {name: 'bankType', value: bankType};
            data[data.length] = {name: 'formality', value: castData["formality"]};

            // Send the data using post
            console.log(data);
            var posting = $.post(url, data, function (response) {
                if (response.code != 0) {
                    $("#dialog-result").empty();
                    $("#serial").val("");
                    $("#pin").val("");
                    $("body").customStopLoading();
                    $("body").customNotify({type: "error", text: response.message});
                } else {
                    if (response.data.redirect == true) {
                        window.top.location = response.data.link;
                    } else {
                        if (viewtype == 0) {
                            $("#dialogResult").empty();
                            //$("#submitRecharg").hide();
                            $("#serial").val("");
                            $("#pin").val("");
                            $("#group-result .box-result").show();
                            loadPackage();
                            jQuery("#group-result .box-result").load("/result-" + response.data.order_id + ".html?display=box");
                        } else if (viewtype == 1) {
                            $("#serial").val("");
                            $("#pin").val("");
                            $("body").customNotify({type: "sucess", text: response.message});
                        }
                        $("body").customStopLoading();


                        $("#group-card").css({"left": "-100%"});
                        $("#group-result").fadeIn();
                        $("#group-result").css({"left": "0"});
                        $("#group-card").fadeOut();
                    }
                }
            }, "json")
                .done(function (response) {
                    //alert("second success");
                    console.log(response);
                })
                .fail(function (response) {
                    console.log(response);
                    //console.log(response);
                    $("body").customNotify({type: "error", text: "System error please try again later."});
                    //console.log("error");
                    $("body").customStopLoading();
                })
                .always(function (response) {
                    //káº¿t thĂºc

                });
            ;

        });

        var hashdata = '';
        var thatclick = "";
        $("#submitGiftcode").submit(function (event) {
            event.preventDefault();
            // Get some values from elements on the page:
            //
            var $form = $(this),
                data = $(this).serializeArray(),
                url = $form.attr("action");


            data = data.concat(castDis);

            for (var key in data) {
                castData[data[key].name] = data[key].value;
            }

            data[data.length] = {name: 'display', value: JSON.stringify(display)};
            data[data.length] = {name: 'hashdata', value: hashdata};

            console.log(data);
            // Send the data using post
            var posting = $.post(url, data, function (response) {
                console.log(response)
                $("body").customStopLoading();
                if (response.code != 10000) {
                    $("body").customNotify({type: "error", text: response.message});
                } else {
                    thatclick.html(' <span style="color:red;font-weight: bold">' + response.data.giftcode + '</span>');
                    $("body").customNotify({type: "sucess", text: response.message});
                }
            }, "json")
                .done(function (response) {
                    //alert("second success");
                    console.log(response);
                })
                .fail(function (response) {
                    console.log(response);
                    //console.log(response);
                    $("body").customNotify({type: "error", text: "System error please try again later."});
                    //console.log("error");
                    $("body").customStopLoading();
                })
                .always(function (response) {
                    //káº¿t thĂºc

                });
            ;

        });


        $(".exec").click(function () {
            $("body").customLoading();
            $('#submitCard').submit();
        });
        $(".exec_giftcode").click(function () {
            hashdata = $(this).attr('hashdata');
            thatclick = $(this).parent();
            $("body").customLoading();
            $('#submitGiftcode').submit();
        });

        $(".r-next").click(function () {
            $("#group-result").css({"left": "100%"});
            $("#group-card").fadeIn();
            $("#group-card").css({"left": "0"});
            $("#group-result").fadeOut();
        });

        $('input:radio[name=cardType]').change(function () {
            $("#exchangeList").empty();
            $('.typecardchone').text($(this).attr('title'));
            console.log($(this).val());
            jQuery("#exchangeList").load("/form-ty-gia.html?game=" + $("#game-list").val() + "&formality=card&subtype=" + $(this).val());
        });

    });
</script>
</body>
</html>