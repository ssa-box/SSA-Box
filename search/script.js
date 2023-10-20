        $(document).ready(function () {
            var Shuffle = window.shuffle;

            var liData = [
                {
                    name: "Icon Library",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/ssatools-icon-library.html",
                },
                {
                    name: "Icons Documentation",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/ssatools-icons-documentation.html",
                },
                {
                    name: "Advance Rewriter",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/advance-rewriter.html",
                },
                {
                    name: "Color Picker",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/color-token-generator.html",
                },
                {
                    name: "Code Editor",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/ssa-code-editor.html",
                },
                {
                    name: "Password Generator",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/password-generator.html",
                },
                {
                    name: "Voice To Text",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/voice-to-text-converter.html",
                },
                {
                    name: "Online Word",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/online-ssa-word.html",
                }, 
                {
                    name: "Text Tool",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/text-tool.html",
                },
                {
                    name: "Letter Sorter",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/letter-sorter.html",
                },
                {
                    name: "Text to Binary",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/text-to-binary-converter.html",
                },
                {
                    name: "Text Genetator",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/sentences-generator.html",
                },
                {
                    name: "Encrypt Decrypt",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/encrypt-decrypt.html",
                },
                {
                    name: "ALT Key",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/alt-key-code-symbols.html",
                },
               {
                    name: "Text Faces",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/text-faces.html",
                },
                {
                    name: "Emoji",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/emoji-copy-and-paste.html",
                },
                {
                    name: "Code to Image",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/code-to-image-converter.html",
                },
                {
                    name: "PNG to JPG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/png-to-jpg-converter.html",
                },
               {
                    name: "PNG to BMP",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/png-to-bmp-converter.html",
                },
                {
                    name: "PNG to GIF",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/png-to-gif-converter.html",
                },
                {
                    name: "PNG to SVG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/png-to-svg-converter.html",
                },
                {
                    name: "JPG to PNG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-png-converter.html",
                },
               {
                    name: "JPG to PDF",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-pdf-convert.html",
                },
                {
                    name: "JPG to SVG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-svg-converter.html",
                },
                {
                    name: "BMP to PNG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-png-converter.html",
                },
                {
                    name: "BMP to JPG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-jpg-converter.html",
                },
               {
                    name: "BMP to PNG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-png-converter.html",
                },
                {
                    name: "GIF to JPG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/gif-to-jpg-converter.html",
                },
                {
                    name: "GIF to PNG",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/gif-to-png-converter.html",
                },
                {
                    name: "QR Code",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/qr-code-generator.html",
                },     
                              {
                    name: "Dynamic Bar",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/dynamic-bar-code-generator.html",
                },
                {
                    name: "Meta Tag",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/meta-tag-generator.html",
                },
                {
                    name: "YouTube Watch Time",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/youtube-watch-time-generator.html",
                },
                {
                    name: "Html to XML",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/html-to-xml-converter.html",
                },         
                               {
                    name: "JS Deobfuscator & Unpacker,
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/javascript-deobfuscator-and-unpacker.html",
                },
                {
                    name: "Basic Calculator",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/08/basic-calculator.html",
                },
                {
                    name: "Age Calculator",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/age-calculator.html",
                },
                {
                    name: "Nepali Date to English",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/nepali-date-to-english-converter.html",
                },
                               {
                    name: "Video Downloader",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/07/youtube-video-downloader.html",
                },
                {
                    name: " CSS buttons",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-buttons-examples.html",
                },
                {
                    name: "CSS checkboxes",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-checkboxes-examples.html",
                },
                {
                    name: "CSS box shadow",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-box-shadow-examples.html",
                },    
                               {
                    name: "CSS shapes",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/09/css-shapes-examples.html",
                },
                {
                    name: "Css Loaders",
                    img: "https://ssatools.github.io/SSASK-Tools/search/ssatoolimg.png",
                    link: "/2023/10/css-loaders-example.html",
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
