        $(document).ready(function () {
            

            var liData = [
                {
                    name: "URL Shortener",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2024/03/url-shortener.html",
                },  {
                    name: "File Downloader",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2024/01/file-downloader-via-url.html",
                }, {
                    name: "Favicon",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/favicon-generator.html",
                }, {
                    name: "URL encoder",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/url-encoder-for-svg.html",
                }, {
                    name: "Typing Test",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/typing-speed-test.html",
                }, {
                    name: "Currency Converter",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/currency-converter.html",
                },  {
                    name: "Button Generator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/css3-button-generator.html",
                },{
                    name: "Language Translator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/language-translator.html",
                },                {
                    name: "Chess Game",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/11/chess-online-game.html",
                },                {
                    name: "Chat Bot",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/12/chat-bot.html",
                },
                 {
                    name: "Icon Library",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/ssabox-icon-library.html",
                },
                {
                    name: "Icons Documentation",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/ssabox-icon-documentation.html",
                },
                {
                    name: "Advance Rewriter",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/advance-rewriter.html",
                },
                {
                    name: "Color Picker",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/color-token-generator.html",
                },
                {
                    name: "Code Editor",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/ssa-code-editor.html",
                },
                {
                    name: "Password Generator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/password-generator.html",
                },
                {
                    name: "Voice To Text",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/voice-to-text-converter.html",
                },
                {
                    name: "Online Word",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/online-ssa-word.html",
                }, 
                {
                    name: "Text Tool",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/text-tool.html",
                },
                 {
                    name: "Android Intent URLs",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/11/android-launch-link.html",
                },
                {
                    name: "Letter Sorter",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/letter-sorter.html",
                },
                {
                    name: "Text to Binary",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/text-to-binary-converter.html",
                },
                {
                    name: "Text Genetator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/sentences-generator.html",
                },
                {
                    name: "Encrypt Decrypt",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/encrypt-decrypt.html",
                },
                {
                    name: "ALT Key",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/alt-key-code-symbols.html",
                },
               {
                    name: "Text Faces",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/text-faces.html",
                },
                {
                    name: "Emoji",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/emoji-copy-and-paste.html",
                },
                {
                    name: "Code to Image",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/code-to-image-converter.html",
                },
                {
                    name: "PNG to JPG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/png-to-jpg-converter.html",
                },
               {
                    name: "PNG to BMP",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/png-to-bmp-converter.html",
                },
                {
                    name: "PNG to GIF",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/png-to-gif-converter.html",
                },
                {
                    name: "PNG to SVG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/png-to-svg-converter.html",
                },
                {
                    name: "JPG to PNG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-png-converter.html",
                },
               {
                    name: "JPG to PDF",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-pdf-convert.html",
                },
                {
                    name: "JPG to SVG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/jpg-to-svg-converter.html",
                },
                {
                    name: "BMP to PNG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-png-converter.html",
                },
                {
                    name: "BMP to JPG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-jpg-converter.html",
                },
               {
                    name: "BMP to PNG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/bmp-to-png-converter.html",
                },
                {
                    name: "GIF to JPG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/gif-to-jpg-converter.html",
                },
                {
                    name: "GIF to PNG",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/gif-to-png-converter.html",
                },
                {
                    name: "QR Code",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/qr-code-generator.html",
                },     
                              {
                    name: "Dynamic Bar",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/dynamic-bar-code-generator.html",
                },
                {
                    name: "Meta Tag",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/meta-tag-generator.html",
                },
                {
                    name: "YouTube Watch Time",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/youtube-watch-time-generator.html",
                },
                {
                    name: "Html to XML",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/html-to-xml-converter.html",
                },         
                               {
                    name: "JS Deobfuscator & Unpacker",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/javascript-deobfuscator-and-unpacker.html",
                },
                {
                    name: "Basic Calculator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/08/basic-calculator.html",
                },
                {
                    name: "Age Calculator",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/age-calculator.html",
                },
                {
                    name: "Nepali Date to English",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/nepali-date-to-english-converter.html",
                },
                               {
                    name: "Video Downloader",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/07/youtube-video-downloader.html",
                },
                {
                    name: " CSS buttons",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-buttons-examples.html",
                },
                {
                    name: "CSS checkboxes",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-checkboxes-examples.html",
                },
                {
                    name: "CSS box shadow",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/beautiful-css-box-shadow-examples.html",
                },    
                               {
                    name: "CSS shapes",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/09/css-shapes-examples.html",
                },
                {
                    name: "Css Loaders",
                    img: "https://ssa-box.github.io/SSA-Box/search/ssatoolimg.png",
                    link: "/2023/10/css-loaders-example.html",
                },
            ];
               var liList = document.getElementById("sgrid");
    liData.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.className = "icons";
        listItem.setAttribute("data-item-name", item.name);
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
    function filterItems() {
        var searchTerm = document.getElementById('shuffle-search').value.toLowerCase();
        var items = liList.getElementsByClassName('icons');
        for (var i = 0; i < items.length; i++) {
            var itemName = items[i].getAttribute('data-item-name').toLowerCase();
            if (itemName.includes(searchTerm)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none'; 
            }
        }
    }
    document.getElementById('shuffle-search').addEventListener('input', filterItems);
});
      
