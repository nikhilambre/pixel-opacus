

    <script type="text/javascript">
        $(document).ready(function() {


            /*  Styleswitch bar show/hide
            ______________________________________________________________*/

            $("#style-show").click(function () {
                $('.style-switch').toggleClass("show-themes");
            });   

            /*  fadeInLeft effect in sidebar menu 
            ______________________________________________________________*/

            $(".open-sidebar").click(function(){
                $('.st-menu li').toggleClass('fadeInLeft');
            }), 'fast';


            /*  Big drop down menu  
            ______________________________________________________________*/

            cbpHorizontalMenu.init();


            /*  ShapeHoverEffectSVG used at team box 
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


            /*  Slideshow of responsive slider1 variables are available     
            __________________________________________________________________*/

            $("#slider1").responsiveSlides({
                maxwidth: 400, 
                speed: 1000
            });

            $("#slider2").responsiveSlides({
                maxwidth: 400, 
                speed: 3000
            });

            $("#slider3").responsiveSlides({
                maxwidth: 400, speed: 1000
            });

            $("#slider4").responsiveSlides({
                maxwidth: 400, speed: 1000
            });

            $("#slider5").responsiveSlides({
                maxwidth: 400, 
                speed: 1000
            });             


            /*  Bootstrap carosal and variables are available       
            ____________________________________________________________________*/

            $('#carousel-example').carousel({
                interval: 5000      //  Visibility period of a slide
            })

            $('#carousel-example1').carousel({
                interval: 8000
            })



            /*  typed js for home-page1 and variables are available     
            _____________________________________________________________________*/

            $("#typed").typed({
                strings: ["Responsive", "Ultimate", "Business oriented", "Discovered", "Created with love"],
                typeSpeed: 30,
                backDelay: 500,
                loop: true,
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ foo(); }
            }); 
         
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

            /*  Owl carosal jquery plugin
            ______________________________________________________________*/

            $('#owl-demo').owlCarousel({
                autoPlay: 4000,
                items: 8,
                itemsDesktop: [1199, 8],
                itemsDesktopSmall: [979, 6]
            });

            /*  waypoint jquery plugin
            ______________________________________________________________*/

            $('.scroll_way').waypoint(function(){
                $(this).addClass('in');
            },{offset:'80%'});   


        /*  Bootstrap Tabs
        ______________________________________________________________*/

        $('#myTab a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        }); 


        /*  On hover effect 
        ______________________________________________________________*/            

        // OPACITY OF BUTTON SET TO 0%
        $(".hover-div").css("opacity", "0");
        // ON MOUSE OVER
        $(".hover-div").hover(function () {
            $('.hover-obj').stop().animate({
                opacity: 1
            }, "slow");
            $(this).stop().animate({
                opacity: .8
            }, "slow");
        },
        // ON MOUSE OUT
        function () {
            $(this).stop().animate({
                opacity: 0
            }, "slow");
        });

        /*  Zoom in image on click
        ______________________________________________________________*/        

        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
	            verticalFit: true,
	            titleSrc: function(item) {
		            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
	            }
            },
            gallery: {
	            enabled: true
            },
            zoom: {
	            enabled: true,
	            duration: 300, // don't foget to change the duration also in CSS
	            opener: function(element) {
		            return element.find('img');
	            }
            }
        });

        /*  MixIt up jquery
        ______________________________________________________________*/            

        $('.Grid').mixitup();


        /*  Direction over effect
        ______________________________________________________________*/            

        $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );         

        $(".roll").css("opacity","0");
        $(".roll").hover(
            function () {

                $('.hover-text').stop().animate({
                    opacity: 1,
                    top: '40px'
                }, "fast");

                $('.icon-heart').stop().animate({
                    opacity: 1,
                    top: '-10px'
                }, "slow");                    

                $(this).stop().animate({
                    opacity: 0.7
                }, "slow");
            },
            function () {

                $('.hover-text').stop().animate({
                    opacity: 0,
                    top: '100px'
                }, "");

                $('.icon-heart').stop().animate({
                    opacity: 0,
                    top: '80px'
                }, "");                    

                $(this).stop().animate({
                    opacity: 0
                }, "slow");

            });

        /*  Big drop down menu  
        ______________________________________________________________*/        

        $('#st-accordion').accordion();        


        });
    </script>        