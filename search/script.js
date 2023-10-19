        $(document).ready(function () {
            var Shuffle = window.shuffle;

            var liData = [
                {
                    name: "Tool1",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool2",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool3",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool4",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool5",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool6",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool7",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool8",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool9",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool10",
                    img: "arrow.png",
                    link: "#",
                },
                {
                    name: "Tool11",
                    img: "arrow.png",
                    link: "#",
                },
            ];

            var liList = document.getElementById("sgrid");

            liData.forEach(function (item) {
                var listItem = document.createElement("li");
                listItem.className = "icons";
                listItem.setAttribute("data-item-name", item.name); // Add data attribute

                var image = document.createElement("img");
                image.src = item.img;
                listItem.appendChild(image);

                var textSpan = document.createElement("span");
                textSpan.textContent = item.name;
                listItem.appendChild(textSpan);

                listItem.addEventListener("click", function () {
                    window.location.href = item.link;
                });

                liList.appendChild(listItem);
            });

            var bookList = function (element) {
                this.element = element;
                this.shuffle = new Shuffle(element, {
                    itemSelector: ".ssatoolshome-list-wrap ul>li", // Adjust the item selector
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
