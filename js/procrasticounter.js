 window.onload = function() {

        function changeBackground(color) {

            var bgcolors = [
            "background: #00f367; /* For browsers that do not support gradients */ background: -webkit-linear-gradient(#00f367, #38e1db); /* For Safari 5.1 to 6.0 */ background: -o-linear-gradient(#00f367, #38e1db); /* For Opera 11.1 to 12.0 */ background: -moz-linear-gradient(#00f367, #38e1db); /* For Firefox 3.6 to 15 /* background: linear-gradient(#00f367, #38e1db); /* Standard syntax */", 
            "background: #ff759f; /* For browsers that do not support gradients */ background: -webkit-linear-gradient(#ff759f, #ffe672); /* For Safari 5.1 to 6.0 */ background: -o-linear-gradient(#ff759f, #ffe672); /* For Opera 11.1 to 12.0 */ background: -moz-linear-gradient(#ff759f, #ffe672); /* For Firefox 3.6 to 15 /* background: linear-gradient(#ff759f, #ffe672); /* Standard syntax */", 
            "background: #75f4ff; /* For browsers that do not support gradients */ background: -webkit-linear-gradient(#75f4ff, #9d1fff); /* For Safari 5.1 to 6.0 */ background: -o-linear-gradient(#75f4ff, #9d1fff); /* For Opera 11.1 to 12.0 */ background: -moz-linear-gradient(#75f4ff, #9d1fff); /* For Firefox 3.6 to 15 /* background: linear-gradient(#75f4ff, #9d1fff); /* Standard syntax */",  
            "background: #7a09db; /* For browsers that do not support gradients */ background: -webkit-linear-gradient(#7a09db, #ff7f31); /* For Safari 5.1 to 6.0 */ background: -o-linear-gradient(#7a09db, #ff7f31); /* For Opera 11.1 to 12.0 */ background: -moz-linear-gradient(#7a09db, #ff7f31); /* For Firefox 3.6 to 15 /* background: linear-gradient(#7a09db, #ff7f31); /* Standard syntax */"                         

            ]

            var randoNum = Math.round(Math.random() * 3);

            document.body.style = bgcolors[randoNum];
        }

        changeBackground();
        

        var queryStr = window.location.search;
        var eNameVar = getQueryVariable('eName');

        // Checks for spaces in event entry

        if (eNameVar.indexOf('+') > -1){
            var words = eNameVar.split('+');
            var nameHolder = "";
            for (var i = 0; i < words.length; i++){
                nameHolder = nameHolder + words[i] + " ";
            }
        }


        var dateVar = getQueryVariable('date') + ":00";


        function getFormattedTimezone(variable){
            var currentTime = new Date(dateVar);
            var currentTimezone = currentTime.getTimezoneOffset();
            currentTimezone = (currentTimezone/60) * -1;

            var curStr = currentTimezone;

            if (curStr < 10 && curStr > -10){
                curStr = String(currentTimezone);
                curStr = (curStr[0] == '-') ? curStr[0] + "0" + curStr[1] : "0" + curStr[1]; 
            }


            var gmt = "";
            if (currentTimezone !== 0) {
              gmt += currentTimezone > 0 ? '+' : ''; 

              gmt += curStr;
              gmt += ":00"
            }
        
            return gmt;
        };    
        
        dateVar += getFormattedTimezone(dateVar);


        function getQueryVariable(variable) {
                var query = queryStr.substring(1);
                var vars = query.split('&');
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    if (decodeURIComponent(pair[0]) == variable) {
                        return decodeURIComponent(pair[1]);
                    }
                }
                console.log('Query variable %s not found', variable);
        };

        
        var x = setInterval(function() {

                var countDownDate = new Date(dateVar).getTime();

                // Get todays date and time
                var now = new Date().getTime();
                
                // Find the distance between now an the count down date
                var distance = countDownDate - now;
                
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Output the result in an element with id="demo"
                
                document.getElementById("theEvent").innerHTML = " <h1>" + nameHolder + 
                "</h1><br/>";
                
                document.getElementById("days").innerHTML = days + "</br> <p>days</p>";
                document.getElementById("hours").innerHTML = hours + "</br> <p>hours</p>";
                document.getElementById("minutes").innerHTML = minutes + "</br> <p>minutes</p>";
                document.getElementById("seconds").innerHTML = seconds + "</br> <p>seconds</p>";
                
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("clock").innerHTML = "EXPIRED";
                }
        }, 1000);  
            
            
  };