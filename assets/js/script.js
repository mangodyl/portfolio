$(function() {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

    $("#send-email-btn").on("click", function() {

        $("#contact-form").removeClass("hidden");

    });


    $("#navbar-id a").on("click", function() {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
              }, 800, function(){
                window.location.hash = hash;
            });

        };
    });


    $("#intro-btn").on("click", function() {

        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top -50
        }, 800, function () {
            window.location.hash = hash;
        });


    });

    
});