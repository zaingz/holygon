  

$(document).ready(function() {
 // executes when complete page is fully loaded, including all frames, objects and images
 $(".home-title>span").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 70,
            startDelay: 10,
            backSpeed: 5,
            callback: function() {$('.typed-cursor').hide();}
            
        });
 $("#home-title-hid").removeClass("hidden");

});
