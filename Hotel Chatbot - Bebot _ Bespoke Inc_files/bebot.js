// Functions
$(document).ready(function(){


    // Vars

    var body = $('body');
    var carousel = $('.js-carousel-lrg');
    var faqTitle = $('.title-toggle');
    var mmTrigger = $('.js-mm-trigger');
    var mmClose = $('.js-mm-close');
    var mmMenu = $('.js-mobile-menu');
    var modalTrigger = $('.js-modal-trigger');
    var modalOverlay = $('.js-modal-overlay');
    var modalClose = $('.js-modal-close');
    var modal = $('.js-modal');
    var singleCarousel = $('.js-carousel');

    // Mobile Menu
    mmTrigger.click(function(){
      mmMenu.fadeIn();
      body.toggleClass('no-scroll');
    });

    mmClose.click(function(){
      mmMenu.fadeOut();
      body.toggleClass('no-scroll');
    });

    // Modal
    modalTrigger.click(function() {
        modalOverlay.fadeIn();
        modal.fadeIn();
    });

    modalOverlay.click(function() {
        $(this).fadeOut();
        modal.fadeOut();
    });  

    modalClose.click(function() {
        modal.fadeOut();
        modalOverlay.fadeOut();
    });  

    // Carousels
	  singleCarousel.owlCarousel({
      navigation : false,
      slideSpeed : 250,
      pagination: true,
      singleItem: true
  	});

    carousel.owlCarousel({
      items : 4,
      navigation : false,
      slideSpeed : 250,
      pagination: true,
    });

    // Simple accoordion
    faqTitle .click(function(){
      $(this).toggleClass('expand');
      $(this).next().toggle();
    });

    // Chat bubbles
    var divs = $("[id^=show]");
    var i = 0;
    var loop = window.setInterval(function () {
       
        $(divs[i]).fadeIn(500); i++;
        if (i == divs.length)
            clearInterval(loop);
    }, 1000);

    // Tabs

    $('ul.tabs').each(function(){
      var $active, $content, $links = $(this).find('a');
    
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');
    
      $content = $($active[0].hash);
    
      $links.not($active).each(function () {
        $(this.hash).hide();
      });
    
      $(this).on('click', 'a', function(e){
        $active.removeClass('active');
        $content.hide();
        $active = $(this);
        $content = $(this.hash);
        $active.addClass('active');
        $content.show();
        e.preventDefault();
      });
    });

});


$(document).scroll(function () {
    var stickyBanner = $('.js-sticky-banner');
    var y = $(this).scrollTop();
    if (y > 800) {
        stickyBanner.fadeOut();
    } else {
        stickyBanner.fadeIn();
    }
});

$(function(){
      // bind change event to select
      $('#dynamic-select').on('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
});