jQuery.fn.extend({
    //function 
    customNotify: function (options) {
        options = options == undefined ? {
            text: "Notify",
            type: "success"
        } : options;

        this.wrapper = $("<div>")
                .addClass("toast mdl-shadow--4dp")
                .addClass(options.type)
                .css({"top": this.scrollTop() + 80})
                .appendTo(this);

        $("<i>")
                .text("check")
                .addClass("material-icons mdl-shadow--2dp").appendTo(this.wrapper);
        $("<span>")
                .text(options.text)
                .appendTo(this.wrapper);
        var wrapper = this.wrapper;
        setTimeout(function () {
            wrapper.remove();
        }, 4000);
    },
    /**
     * This is a description
     * support build format string matched value from %s %d
     * @namespace My.Namespace
     * @method sprintf
     * @param {String} str - some string
     * @param {Object} obj - some object
     * @param {requestCallback} callback - The callback that handles the response.
     * @return {String}
     * e.g. %s, %d
     * "%s %d year".sprintf("support", 10);
     * result: support 10 year
     */
    sprintf: function () {
        var args = arguments,
                string = args[0],
                i = 1;
        return string.replace(/%((%)|s|d)/g, function (m) {
            // m is the matched format, e.g. %s, %d
            var val = null;
            if (m[2]) {
                val = m[2];
            } else {
                val = args[i];
                // A switch statement so that the formatter can be extended. Default is %s
                switch (m) {
                    case '%d':
                        val = parseFloat(val);
                        if (isNaN(val)) {
                            val = 0;
                        }
                        break;
                }
                i++;
            }
            return val;
        });
    },
    //function support build right tooltip
    customTooltip: function () {

        var ttip = $("<div>")
                .addClass("mdl-tooltip")
                .attr("data-upgraded", ",MaterialTooltip")
                .appendTo($("body"));
        var mouseOffset = {screenX: 0, screenY: 0, pageX: 0, pageY: 0, offsetX: 0, offsetY: 0, clientX: 0, clientY: 0};
        $("body").mousemove(function (e) {
            mouseOffset = e;
        });
        $.each(this, function (i, e) {
            $(e).hover(function () {
                var text = $(this).attr("data-tooltip");
                ttip.css({
                    "left": mouseOffset.offsetX,
                    "margin-left": 23,
                    "top": $(this).offset().top - $("body").scrollTop() + 35
                })
                        .addClass("is-active")
                        .text(text);
            });
            $(e).mouseleave(function () {
                ttip.removeClass("is-active");
            });
        });
    },
    customContextMenu: function () {
        //style="right: 5px; top: 39px; width: 124px; height: 136px;"
        //style="width: 124px; height: 136px;"
        //style="clip: rect(0px 124px 136px 0px);"
        var parentClass = this.attr("class");

        $("body").click(function (e) {
            if ($(e.target).hasClass("mdl-context-button") == false)
                $(".mdl-menu__container").removeClass("is-visible");
        });
        $.each(this, function (i, e) {
            $(e).click(function () {
                $(".mdl-menu__container").removeClass("is-visible");
                //mdl-menu__item
                var width = $(this).find(".mdl-menu__item").width();
                var height = $(this).find(".mdl-menu").height() + 10;
                var left = $(this).offset().left;
                var right = 5;
                var minwidth = $("body").width() - $(this).offset().left;
                //console.log(width);
                if (width <= 124) {
                    width = 124;
                } else {
                    width = width + 40;
                }
                if (minwidth < (124 + 5)) {
                    left = "auto";
                } else {
                    right = "auto";
                }
                if (height > 136) {
                    width = width + 20;
                }
                var target = $(this).children(".mdl-menu__container")
                        .addClass("is-visible")
                        .css({
                            "top": 40,
                            "width": width,
                            "height": 136,
                            "right": right,
                            "left": left
                        });
                $(this).find(".mdl-menu__outline")
                        .css({
                            "width": width,
                            "height": height
                        });
                $(this).find(".mdl-menu")
                        .css({
                            "clip": "rect(0px " + (width) + "px " + (height) + "px 0px)",
                            "width": width
                        })
                if ($(this).children(".mdl-context-button").attr("data-change") == "true") {
                    var parent = $(this);
                    var value_id = $(this).find(".mdl-menu-value");
                    var button_action = $(this).children(".mdl-context-button");
                    $.each($(this).find(".mdl-menu__item"), function (i, e) {
                        $(e).click(function () {
                            value_id.val($(this).attr("data-id"));
                            button_action.text($(this).attr("data-text"));
                            parent.find(".mdl-menu__item").removeAttr("disabled");
                            $(this).attr("disabled", "true");

                            //console.log(this);
                        });
                    });
                }
            });
        });
    },
    //function support build query string from array
    http_build_query: function (params) {
        var querystring = "";
        $.each(params, function (key, val) {
            if (querystring != "")
                querystring += "&";
            querystring += key + "=" + val;
        });
        return querystring;
    },
    http_property_query: function () {
        var hasOwn = Object.prototype.hasOwnProperty;
        Object.keys = Object_keys;
        function Object_keys(obj) {
            var keys = [], name;
            for (name in obj) {
                if (hasOwn.call(obj, name)) {
                    keys.push(name);
                }
            }
            return keys;
        }
    }
});