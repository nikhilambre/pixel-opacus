

$(document).ready(function() {

    $('.scroll-fadeInUp').waypoint(function(){
        $(this).addClass('animated fadeInUp');
    },{offset:'80%'});

    $('.scroll-fadeInLeft').waypoint(function(){
        $(this).addClass('animated fadeInLeft');
    },{offset:'80%'}); 

    $('.scroll-fadeInRight').waypoint(function(){
        $(this).addClass('animated fadeInRight');
    },{offset:'80%'});         

    $('.scroll-fadeIn').waypoint(function(){
        $(this).addClass('animated fadeIn');
    },{offset:'80%'});     

    $('.scroll-fadeInUpBig').waypoint(function(){
        $(this).addClass('animated fadeInUpBig');
    },{offset:'95%'}); 

    $('.scroll-pulse').waypoint(function(){
        $(this).addClass('animated pulse');
    },{offset:'80%'}); 

    $('.scroll-bounceIn').waypoint(function(){
        $(this).addClass('animated bounceIn');
    },{offset:'90%'}); 




    $('.scroll_way').waypoint(function(){
        $(this).addClass('in');
    },{offset:'85%'}); 

    $('.scroll-swing').waypoint(function(){
        $(this).addClass('animated swing');
    },{offset:'80%'});



});