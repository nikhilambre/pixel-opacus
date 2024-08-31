/*______________________________________________________________ 
 *
 *      Theme Inspiro
 *      Designed by Pixel coders (http://www.pixelcoders.in)
 *      Theme Imspiro - Version 1.1 (2014)
 *______________________________________________________________*/



$(document).ready(function() {


	/*	fadeInLeft effect in sidebar menu 
	______________________________________________________________*/

    $(".open-sidebar").click(function(){
        $('.st-menu li').toggleClass('fadeInLeft');
    }), 'fast';


    /*	Big drop down menu  
    ______________________________________________________________*/

    cbpHorizontalMenu.init();


    /*	ShapeHoverEffectSVG used at team box in home-page1	
    _______________________________________________________________*/

    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                pathConfig = {
                    from : path.attr( 'd' ),
                    to : el.getAttribute( 'data-path-hover' )
                };

            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed, easing );
            } );

            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed, easing );
            } );
        } );
    }

    init();


    /*	Slideshow of responsive slider1	variables are available		
    __________________________________________________________________*/

    $("#slider1").responsiveSlides({
        maxwidth: 400, 
        speed: 1000
    });


    /*	Bootstrap carosal and variables are available		
    ____________________________________________________________________*/

    $('#carousel-example').carousel({
        interval: 5000		//	Visibility period of a slide
    })


    /*	typed js for home-page1 and variables are available		
    _____________________________________________________________________*/

    $("#typed1").typed({
        strings: ["Responsive", "Ultimate", "Business oriented", "Discovered", "Created with love"],
        typeSpeed: 30,
        backDelay: 500,
        loop: true,
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); }
    }); 



    /*	bootstrap carosal for home-page2 js and variables are available		
    _____________________________________________________________________*/

    $('#carousel-example1').carousel({
        interval: 8000
    })


    /*	typed js for home-page2 js and variables are available		
    _____________________________________________________________________*/

    $("#typed2").typed({
        strings: ["We Unit ..!", "We Imagine ..!", "We Decide ..!", "We Workout ..! and It's DONE.!"],
        typeSpeed: 30,
        backDelay: 500,
        loop: true,
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); }
    });    

    function foo(){ console.log("Callback"); }

});	