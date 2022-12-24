$(document).ready(function() {

/* initialize shuffle plugin */
var $grid = $('#grid');

$grid.shuffle({
itemSelector: '.item' // the selector for the items in the grid
});

  /* reshuffle when user clicks a filter item */
  $('#filter a').on("click", function(e){
    e.preventDefault();

// set active class
$('#filter a').removeClass('activefilter');
$(this).addClass('activefilter');

// get group name from clicked item
var groupName = $(this).attr('data-group');

// reshuffle grid
$grid.shuffle('shuffle', groupName );
});

  $("#to-top").on("click", function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

//responsive video  
if($('iframe,video').length) {
$("html").fitVids();
}
//Link to top
$(function () {
  $('a[href*=#]:not([href=#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//Placeholder Plugin Settings
$('input, textarea, select').placeholder()  

//Skills Bar
jQuery('.skillbar').on("each", function(){
  jQuery(this).appear(function() {
    jQuery(this).find('.count-bar').animate({
      width:jQuery(this).attr('data-percent')
    },3000);
    var percent = jQuery(this).attr('data-percent');

    jQuery(this).find('.count').html('<span class="wow fadeIn">' + percent + '</span>');
  });
});

//SlickNav
$('#menu').slicknav();

//WOW Js
new WOW().init();


 $("#testimonial-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      pagination : true,
      autoPlay:3000,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });

//CounterUp
$('.counter').counterUp({
delay: 10,
time: 1000
});

            
//Contact Form 
// Form validation via the jQuery Validate plugin
$('#contactForm').validate({
  debug: true,
  ignore: ".ignore",
  errorElement: "span",
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    },
    subject: {
      required:true,
      minlength:2
    },
    message: {
      required: true
    }
  },

  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/contacti.php",
      data: $(form).serialize(),
      success: function(response){

}
});
return false; // required to block normal submit since you used ajax
} 

});//validate
// Reset validation messages when clearing or cancelling the form
$('#reset, #cancel').on("click", function(){
  $('span.error').hide();
  $('.error, .valid').removeClass('error valid');
}); 

//obtain color template 
var colorname=$("html").attr('class');
var arrclean=colorname.replace(/ /g, ",");
var colorarray = arrclean.split(',');
var finalarray = colorarray[0].split('-');

$(window).on("scroll", function() {
  var scrollPosition = scrollY || pageYOffset;
  if (scrollPosition > $("#expertise").position().top - $(window).height()) {
    $('.skill-icons').children('.active').each(function(i) {
      var row = $(this);
      setTimeout(function() {
        row.css('background', '#'+finalarray[2]);
      }, 100 * i);
    });
  }
});


  /*---------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */ 
   $(window).on("load", function(){

      // will first fade out the loading animation 
      $("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

    })

});