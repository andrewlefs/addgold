function sprintf() {
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
}
$(function () {
    $.widget("custom.paginationTable", {
        options: {
            row: 10
        },
        _create: function () {
            this.column = $(this.element).children("thead").children("tr").children("th").length;

            this.td = $("<td>")
                    .attr("colspan", this.column)
                    .appendTo(
                            $("<tr>")
                            .appendTo(
                                    $("<tfoot>")
                                    .appendTo(this.element)
                                    )
                            );

            this.pagination = $("<div>")
                    .attr("class", "pagination").appendTo(this.td);

            this._createPaging();
            this._createToggle();
            this._Visiable();

        },
        _createToggle: function () {
            var parrentId = this.id = $(this.element).attr("id");
            $.each($(this.element).children("tbody").children("tr"), function (i, e) {
                $(this).attr("data-toggle", sprintf("%s-%d", parrentId, i));
            });
        },
        _createPaging: function () {
            this.totalRecord = $(this.element).children("tbody").children("tr").length;
            var floatCount = this.totalRecord / this.options.row;

            this.count = parseInt(this.totalRecord / this.options.row);
            if (this.count <= floatCount)
                this.count = this.count + 1;
            this.currentPage = 0;
            var pageStep = (this.currentPage * this.options.row);
            var end = pageStep + this.options.row;
            //console.log(pageStep);
            if (end >= this.totalRecord)
                end = this.totalRecord;
            this.paging = $("<div>").attr("class", "count")
                    .text(sprintf("%d-%d of %d", (end == 0 ? 0 : (pageStep + 1)), end, this.totalRecord))
                    .appendTo(this.pagination);

            var parrent = this;
            var prev = this._Prev;
            this._createButton(this.pagination, "chevron_left")
                    .on("click", function () {
                        prev(parrent);
                    });

            this.middle = $("<span>").text(pageStep + 1)
                    .appendTo(this.pagination);


            var next = this._Next;
            this._createButton(this.pagination, "chevron_right")
                    .on("click", function () {
                        next(parrent);
                    });

        },
        _Visiable: function () {
            $(this.element).children("tbody").children("tr").css("display", "none");
            var pageStep = (this.currentPage * this.options.row);
            this.middle.text(this.currentPage + 1);
            var end = pageStep + this.options.row;
            if (end >= this.totalRecord)
                end = this.totalRecord;
            this.paging.text(sprintf("%d-%d of %d", (end == 0 ? 0 : (pageStep + 1)), end, this.totalRecord));

            var limit = pageStep + this.options.row;
            for (var i = pageStep; i < limit && i < end; i++) {
                $(sprintf("tr[data-toggle='%s-%d']", $(this.element).attr("id"), i)).css("display", "");
            }
        },
        _createButton: function (paging, text) {
            var button = $("<button>")
                    .attr("class", "mdl-button mdl-js-button mdl-button--icon")
                    .attr("data-upgraded", ",MaterialButton")
                    .appendTo(paging);
            $("<i>").attr("class", "material-icons")
                    .text(text)
                    .appendTo(button);
            return button;

        },
        _Next: function (p) {
            var pageStep = (p.currentPage * p.options.row);          
            var end = pageStep + p.options.row;
            if (end >= p.totalRecord)
               return;
            p.currentPage++;
            p._Visiable();
        },
        _Prev: function (p) {
            if (p.currentPage == 0)
                return;
            p.currentPage--;
            p._Visiable();
        }
    });
});