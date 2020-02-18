function shuffle(e) {               // pass the divs to the function
    var replace = $('<div>');
    var size = e.length;
    while (size >= 1) {
       var rand = Math.floor(Math.random() * size);
       var temp = e.get(rand);      // grab a random div from our set
       replace.append(temp);        // add the selected div to our new set
       e = e.not(temp); // remove our selected div from the main set
       size--;
    }
    $('#shuffle').html(replace.html() );     // update our container div with the
                                             // new, randomized divs
}


$(document).ready(function() {

    shuffle( $('#shuffle > div') );

    $("#shuffleHard").on('click', function() {
        shuffle( $('#shuffle > div') );         
    })

    // Add smooth scrolling to all links
    $("a.smoothscroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('.navbar-brand').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('.carousel').carousel();

    // Start mixitup
    $('#portfolio').mixItUp();

    new WOW().init();

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 30, 2020 19:00:00").getTime();

    var yearInMs = 1000 * 60 * 60 * 24 * 365;

    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        var isAlreadyMarried = false;
        var marriedForYears = 0;
        if(distance < 0) {
            isAlreadyMarried = true;
            distance = Math.abs(distance);
            marriedForYears = Math.ceil(distance / yearInMs);
            distance = (countDownDate + (marriedForYears * yearInMs)) - now;
        }

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        document.getElementById("all").innerHTML = days + ": " + hours + ": " + minutes + ": " + seconds;

        // If the count down is over, write some text 
        if (isAlreadyMarried) {
            document.getElementById("all").innerHTML = "Happily Married and awaiting " + ordinal_suffix_of(marriedForYears) + " anniversary <br/>";
            document.getElementById("all").innerHTML += days + ": " + hours + ": " + minutes + ": " + seconds
        }
    }, 1000);

    // var nav = $("nav.navbar");
    // var logo = $(".navbar-brand img");
    // var slider = $(".main-slider");
    // var width, scrolled;

    // $(window).resize(function() {
    //     width = window.innerWidth;
    //     if (width < 991) {
    //         nav.css({
    //             'height': '60px',
    //             'transition': '0.5s'
    //         });
    //         logo.css({
    //             'height': '45px',
    //             'transition': '0.7s'
    //         });
    //         slider.css({
    //             'margin-top': '60px',
    //             'transition': '0.7s'
    //         });
    //     } else if (width > 991 && scrolled < 150) {
    //         nav.css({
    //             'height': '125px',
    //         });
    //         logo.css({
    //             'height': '76px',
    //         });
    //         slider.css({
    //             'margin-top': '125px'
    //         });
    //     } else {
    //         nav.css({
    //             'height': '60px',
    //             'transition': '0.5s'
    //         });
    //         logo.css({
    //             'height': '45px',
    //             'transition': '0.7s'
    //         });
    //         slider.css({
    //             'margin-top': '60px',
    //             'transition': '0.7s'
    //         });
    //     }
    // });

    // $(document).scroll(function() {
    //     scrolled = $(this).scrollTop();
    //     if (scrolled > 150) {
    //         nav.css({
    //             'height': '60px',
    //             'transition': '0.5s'
    //         });
    //         logo.css({
    //             'height': '45px',
    //             'transition': '0.7s'
    //         });
    //         slider.css({
    //             'margin-top': '60px',
    //             'transition': '0.7s'
    //         });
    //     } else if (scrolled < 150 && width > 991) {
    //         nav.css({
    //             'height': '125px',
    //         });
    //         logo.css({
    //             'height': '76px',
    //         });
    //         slider.css({
    //             'margin-top': '125px'
    //         });
    //     } else {
    //         nav.css({
    //             'height': '60px',
    //             'transition': '0.5s'
    //         });
    //         logo.css({
    //             'height': '45px',
    //             'transition': '0.7s'
    //         });
    //         slider.css({
    //             'margin-top': '60px',
    //             'transition': '0.7s'
    //         });
    //     }
    // });
});