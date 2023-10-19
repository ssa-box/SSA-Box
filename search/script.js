$(document).ready(function () {
    var Shuffle = window.shuffle;

    var bookList = function (element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
            itemSelector: ".ssatoolshome-list > li",
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
            return itemName.toLowerCase().indexOf(searchText) !== -1;
        });
    };

    window.book_list = new bookList($(".ssatoolshome-list-wrap > ul"));
});


        var liData = [
            {
                name: "Arrow1",
                img: "arrow.png", 
                link: "https://example.com/arrow",
            },
                        {
                name: "Arrow2",
                img: "arrow.png", 
                link: "https://example.com/arrow",
            },
       
        ];

        var liList = document.getElementById("sgrid");

        liData.forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.className = "icons";

            // Create an image element and set the source
            var image = document.createElement("img");
            image.src = item.img;
            listItem.appendChild(image);

            listItem.innerHTML += "<br>" + item.name;

            listItem.addEventListener("click", function () {
                // Open the specified link when the item is clicked
                window.location.href = item.link;
            });

            liList.appendChild(listItem);
        });
