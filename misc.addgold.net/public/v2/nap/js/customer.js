/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function remove_unicode(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    //str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
    //str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    //str = str.replace(/^\-+|\-+$/g, "");
    return str.toLowerCase();
}
function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}

var call = function (path, data, type, callback) {
    var querystring = baselink + "/" + path + "?";
    if (type.toLowerCase() != "post") {
        querystring += "data=" + encodeURIComponent(JSON.stringify(data));
    }
    console.log(querystring);
    $.ajax({
        type: type,
        method: type,
        url: querystring,
        dataType: 'json',
        data: {data: data},
        success: function (data) {
            callback(data, 200);
        },
        error: function (data) {
            callback(data, -1);
        }
    });
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function isCookieExists(cname) {
    var username = getCookie(cname);
    return (username != "") ? true : false
}

var renderPanelLogin = function (element, data) {
    if (data == false) {
        $("<a>").text("Đăng nhập").attr("href", "https://id.addgold.net/login.html?client_id=10000&redirect_url=" + encodeURIComponent(baselink + "/oauth.html") + "&action=dang-nhap").appendTo($(element));
    } else {
        $("<span>").text("Chào ").appendTo($(element));
        $("<a>").text(data.account).attr("href", "https://id.addgold.net/trang-ca-nhan.html?change=&callback_url=" + baselink + "/login.html&app=mopay&action=cap-nhat").appendTo($(element));
        $("<span>").text(" (").appendTo($(element));
        $("<a>").text("Thoát")
                .css({color: 'red'})
                .attr("href", "https://id.addgold.net/v1.0/logout.html?client_id=10000&redirect_url=" + encodeURIComponent(baselink + "/logout.html?access=" + getCookie("lu"))).appendTo($(element));
        $("<span>").text(")").appendTo($(element));
    }
}

var author = function (element) {
    var el = document.getElementById(element);
    if (userInfo !== false) {
        renderPanelLogin(el, userInfo);
        return;
    }
    if (el != undefined && isCookieExists("lu")) {
        var lu = getCookie("lu");

        call("authorize", {lu: lu}, "get", function (data, code) {
            if (code == 200 && data.code == 0) {
                renderPanelLogin(el, data.data);
            } else {
                renderPanelLogin(el, false);
            }
        });
    } else {
        renderPanelLogin(el, false);
    }
}

var loadPackage = function () {

    var server_id = $("option:selected", $("#serverlist")).attr("token-data");
    var merge_id = $("option:selected", $("#serverlist")).val();
    var hashToken = $("option:selected", $("#serverlist")).attr("hashToken");

    $(".package").hide();
    if ($("#character").val() == "") {
        $("#card_type").unbind();
        $("#card_type").empty();
        $("<option>")
                .val('0')
                .text("Nạp thường")
                .appendTo($("#card_type"));
        return;
    }
    call("search", {key: "promo", data: {merge_id: merge_id, server_id: server_id, hash_token: hashToken, character_id: $("option:selected", $("#character")).attr("id")}}, "get", function (data, code) {
        if (code == 200 && data.code == 0) {
            $("#card_type").unbind();
            $("#card_type").empty();
            $.each(data.data, function (i, item) {
                $("<option>").val(item.type)
                        .text(item.display)
                        .appendTo($("#card_type"));
            });
            if (data.data.length > 1)
                $(".package").show();
        } else {
            $("<option>")
                    .val('0')
                    .text("Nạp thường")
                    .appendTo($("#card_type"));
        }
    });
}
$(document).ready(function () {
    $("#serverlist").change(function () {
        var server_id = $("option:selected", this).attr("token-data");
        var merge_id = $("option:selected", this).val();
        var hashToken = $("option:selected", this).attr("hashToken");
        $("#character").empty();
        $("body").customLoading();
        if (merge_id == "") {
            $("<option>")
                    .val('')
                    .text("Không có nhân vật")
                    .appendTo($("#character"));
            $("body").customStopLoading();
            return;
        }
        if ($("option:selected", this).attr("maintenance") == 1) {
            $("<option>")
                    .val('')
                    .text("Không có nhân vật")
                    .appendTo($("#character"));
            $("body").customStopLoading();
            $("body").customNotify({type: "error", text: "Máy chủ đang bảo trì"});
            return;
        }
        call("search", {key: "characterlist", data: {merge_id: merge_id, server_id: server_id, hash_token: hashToken}}, "get", function (data, code) {
            console.log(data);
            if (code == 200 && data.code == 0) {
                $("#character").unbind();
                $("<option>")
                        .val('')
                        .text("Chọn Nhân Vật")
                        .appendTo($("#character"));
                $.each(data.data, function (i, item) {
                    var hashTag = $("<option>").val(item.hash)
                            .attr("id", item.character_id);
                    if (item.character_name == "" || item.character_name == undefined) {
                        hashTag.text(item.character_id);
                    } else {
                        hashTag.text(item.character_name);
                    }
                    hashTag.appendTo($("#character"));
                });
                $("#character").change(function () {
                    loadPackage();
                });
            } else {
                $("<option>")
                        .val('')
                        .text("Không có nhân vật")
                        .appendTo($("#character"));
            }
            $("body").customStopLoading();
        });
    });

    $("#game-list").change(function () {
        window.top.location = "/" + form + "-" + $(this).val() + ".html";
    });
    /*
    $("#formality").change(function () {
        $("#serial,#pin").val("");
        $("#mcard-formality,#bank-formality,#momo-deno,bank-deno").prop('selectedIndex', 0);
        $(".formality").hide();
        $("." + $(this).val()).show();
    });
    */

    $("#submitRecharg").validate({
        rules: {
            character: {
                required: true
            },
            serverlist: {
                required: true
            }
        },
        messages: {
            serial: "Vui lòng nhập số Seri",
            pin: "Vui lòng nhập số Pin",
            serverlist: {required: "Vui lòng chọn máy chủ"},
            character: {required: "Vui lòng chọn nhân vật"}

        }
    });
    $("#submitRecharg").submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        //
        var $form = $(this),
                data = $(this).serializeArray(),
                url = $form.attr("action");
        var castData = {};
        for (var key in data) {
            castData[data[key].name] = data[key].value;
        }

        if (castData["serverlist"] == "") {
            $("body").customStopLoading();
            return false;
        }
        if (castData["character"] == "") {
            $("body").customStopLoading();
            return false;
        }
        //console.log(castData);
        switch (castData["formality"]) {
            case "mcard":
                if (castData["serial"] == "" || castData["pin"] == "") {
                    $("body").customStopLoading();
                    $("body").customNotify({type: "error", text: "Vui lòng nhập đầy đủ serial và mã nạp tiền."});
                    return false;
                }
                break;
            default:
                break;
        }
        //console.log("ok");
        //add data display game;
        var display = {};
        var type = '';
        var bankType = "";
        //game info
        display['game'] = {name: $("#game-list option:selected").text(), id: $("#game-list option:selected").val()};
        //server info
        display['server'] = {name: $("#serverlist option:selected").text(), id: $("#serverlist option:selected").val()};
        //character info
        display['character'] = {name: $("#character option:selected").text(), id: $("#character option:selected").val()};
        //formality promo
        display['promo'] = {name: $("#card_type option:selected").text(), id: $("#card_type option:selected").val()};
        //formality info
        switch ($("#formality").val()) {
            case "mcard":
                display['formality'] = {
                    name: $("#formality option:selected").text(),
                    id: $("#formality option:selected").val(),
                    service_name: $("#mcard-formality option:selected").text(),
                    service_id: $("#mcard-formality option:selected").val()
                };
                type = $("#mcard-formality option:selected").val();

                break;
            case "bank":
                display['formality'] = {
                    name: $("#formality option:selected").text(),
                    id: $("#formality option:selected").val(),
                    service_name: $("#bank-formality option:selected").text(),
                    service_id: $("#bank-formality option:selected").val()
                };
                type = $("#bank-formality option:selected").val();
                bankType = $("#bank-formality option:selected").attr("type");
                break;
            default:
                type = $("#formality option:selected").val();
                display['formality'] = {
                    name: $("#formality option:selected").text(),
                    id: $("#formality option:selected").val()
                };
                break;
        }
        data[data.length] = {name: 'display', value: JSON.stringify(display)};
        data[data.length] = {name: 'type', value: type};
        data[data.length] = {name: 'bankType', value: bankType};
        //console.log(data);
        // Send the data using post
        var posting = $.post(url, data, function (response) {
            console.log(response);
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
                        $("#submitRecharg").hide();
                        $("#serial").val("");
                        $("#pin").val("");
                        $("#dialog-result").show();
                        loadPackage();
                        jQuery("#dialog-result").load("/result-" + response.data.order_id + ".html?display=box");
                    } else if (viewtype == 1) {
                        $("#serial").val("");
                        $("#pin").val("");
                        $("body").customNotify({type: "sucess", text: response.message});
                        $("body").customStopLoading();
                    }
                }
            }
        }, "json")
                .done(function (response) {
                    //alert("second success");
                })
                .fail(function (response) {
                    //console.log(response);
                    $("body").customNotify({type: "error", text: "System error please try again later."});
                    //console.log("error");
                    $("body").customStopLoading();
                })
                .always(function (response) {
                    //kết thúc              

                });
        ;

    });
    jQuery("#submitRecharg").find('#btn-submit').click(function () {
        //kiem tra điều kiện 
        //console.log("test");
        $("body").customLoading();
    });
    $("#exchange").change(function () {
        $("#exchangeList").empty();
        if ($("#game-list option:selected").val() == "0") {
            $("body").customNotify({type: "error", text: "Vui lòng chọn game để xem tỷ giá quy đổi."});
            return;
        }
        jQuery("#exchangeList").load("/form-ty-gia.html?game=" + $("#game-list option:selected").val() + "&formality=" + $("#exchange option:selected").val());
    });
    var init = function () {
        //author("login");
    }();

});

