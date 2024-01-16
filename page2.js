var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4200) 

let typingTimeout;

        function startTypingAnimation() {
            const lyricsData = [
                { time: 0, text: "Kive na Pyaar tere Naal Hove Tu Hi Dass <<" },
                { time: 3, text: "Duniyo Di Ike Cheez Sohni Tu Hai Bas" },
                { time: 6, text: "Duss Ve Mein Roka Ke Ae Lor Teri Chldi Jaava ~" },
                { time: 9, text: "Tere pyaar Vich Reha Nahiyo Mere Bas<" },
                { time: 11, text: "Sardi Di Dhup Da Sukoon Tere Chehre Vich~" },
                { time: 14, text: "Dass ki pasand Tainu Aa Gaya Hai Mere Vich<<<" },
                { time: 17, text: "Jinna Door Jaava Unna Nede Nede Aayi Jaava~" },
                { time: 20, text: "Kesi H Ajib Ye Kish tere Chehre vich>>>" }
            ];

            const lyricsContainer = document.getElementById('lyrics-container');
            let currentIndex = 0;

            function type() {
                const currentTime = document.getElementById('myAudio').currentTime;

                while (currentIndex < lyricsData.length && currentTime >= lyricsData[currentIndex].time) {
                    lyricsContainer.innerText = lyricsData[currentIndex].text;
                    currentIndex++;
                }

                typingTimeout = setTimeout(type, 100); // Adjust the speed of typing animation
            }

            type();
        }

        function stopTypingAnimation() {
            clearTimeout(typingTimeout);
            document.getElementById('lyrics-container').innerText = ''; // Clear the lyrics container
        }

        $(document).ready(function() {
            $(".candles").click(function() {
                
              $(".flame").animate({"opacity": 0}, "fast");
              $(".flame2").animate({"opacity": 0}, "fast");
              $(".flame3").animate({"opacity": 0}, "fast");
              $(".text").animate({"top": -90, "opacity": 1}, "fast");
            });
        });