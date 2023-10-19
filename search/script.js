    $("ul li").each(function (i) {
        var itemName = $(this).text().toLowerCase().trim();
        $(this).attr("data-item-name", itemName);
    })
    var Shuffle = window.shuffle;
    var bookList = function (element) {
        this.element = element;

        this.shuffle = new Shuffle(element, {
            itemSelector: ".ssatoolshome-list-wrap > ul > li"
        });
        this._activeFilters = [];
        this.addSearchFilter();
    };
    bookList.prototype.toArray = function (arrayLike) {
        return Array.prototype.slice.call(arrayLike);
    };
    bookList.prototype.addSearchFilter = function () {
        var searchInput = $("#shuffle-search")[0];
        if (!searchInput) {
            return;
        }
        searchInput.addEventListener("keyup", this._handleSearchKeyup.bind(this));
    };
    bookList.prototype._handleSearchKeyup = function (evt) {
        var searchInput = $("#shuffle-search")[0];
        var searchText = evt.target.value.toLowerCase();
        if (searchInput && searchInput.value) {
            $(".catalog-search").addClass("input--filled");
        } else {
            $(".catalog-search").removeClass("input--filled");
        }

        this.shuffle.filter(function (element, shuffle) {
            var titleElement = element.querySelector(".ssatoolshome-list-wrap ul li a");
            var titleText = titleElement.textContent.toLowerCase().trim();
            return titleText.indexOf(searchText) !== -1;
        });
    };
    $(document).ready(function () {
        window.book_list = new bookList($(".ssatoolshome-list-wrap > ul"));
    })
