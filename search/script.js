$(document).ready(function () {
    var Shuffle = window.shuffle;

    var bookList = function (element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
            itemSelector: ".ssatoolshome-list-wrap ul > li",
        });

        this.addSearchFilter();
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
            var itemName = element.getAttribute("data-item-name");
            return itemName.indexOf(searchText) !== -1;
        });
    };

    window.book_list = new bookList($(".ssatoolshome-list-wrap > ul"));
});
