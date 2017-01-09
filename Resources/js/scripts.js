$(document).ready(function() {
 
/*For the Sticky navigation*/    
    
$('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
       
        $('nav').addClass('sticky');
        
    } else {
       $('nav').removeClass('sticky'); 
    }
}, {
  offset: '60px;'
});  
    
    
/*Scroll on buttons*/  
    
    $('.js--scroll-to-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)   
    });  
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)   
    });
    
    
    /* Navigation Scroll */
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    
/* Animations on Scroll */
    
    $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1') .addClass('animated fadeIn'); 
    }, {offset: '70%'
    }); 
    
    $('.js--wp-2').waypoint(function(direction){
      $('.js--wp-2') .addClass('animated fadeInUp'); 
    }, {offset: '60%'
    }); 
    
    $('.js--wp-3').waypoint(function(direction){
      $('.js--wp-3') .addClass('animated fadeIn'); 
    }, {offset: '50%'
    });
    
      $('.js--wp-4').waypoint(function(direction){
      $('.js--wp-4') .addClass('animated pulse'); 
    }, {offset: '50%'
    });
    
    
    
/*   Mobile Nav */
    

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        
        } else { 
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            
        }
        
    });
    
    
    
/* Maps */
var map = new GMaps({
  div: '.map',
  lat: -27.4630757,
  lng: 153.095982,
    zoom: 12,
});   
    
 
    map.addMarker({
      lat: -27.4630757,
      lng: 153.095982,
      title: 'Brisbane',
      infoWindow: {
  content: '<p>Our Headquarters</p>'
}
    });
    
    
    
    
 /*
 var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
    
});