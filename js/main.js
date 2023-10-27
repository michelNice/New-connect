/*********************/
      /*sticky*/
/*********************/
$(document).ready(function(){
    $('.js-scroll').waypoint(function(derection){
        if(derection == 'down'){
            $('.first-nav').addClass('sticky')
        }else{
            $('.first-nav').removeClass('sticky')
        }
    },{
        offset:'40%'
    })
})
/*********************/
  /*scroll to section*/
/*********************/

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
/*********************/
  /*Humberger mobile*/
/*********************/
$('.nav-icon').click(function(){
    $(this).toggleClass('open')
});

$('.nav-icon').click(function(){
    var nav = $('.js-main-nav')

    nav.slideToggle(200)
})

/*********************/
    /*animation*/
/*********************/

$('.js--wp-1').waypoint(function(derection){
    $('.js--wp-1').addClass('animated fadeInUp')
  },{
    offset:'50%'
  })
  
  $('.js--wp-2').waypoint(function(derection){
    $('.js--wp-2').addClass('animated fadeInUp')
  },{
    offset:'50%'
  })
  
  $('.js--wp-3').waypoint(function(derection){
    $('.js--wp-3').addClass('animated fadeIn')
  },{
    offset:'50%'
  })
  
  $('.js--wp-4').waypoint(function(derection){
    $('.js--wp-4').addClass('animated fadeIn')
  },{
    offset:'50%'
  })

  /*********************/
    /*Modal windown*/
  /*********************/


  const btn_open = document.querySelector('.btn-price')
  const btn_close = document.querySelector('.btn-close')
  const overlay = document.querySelector('.overlay')
  const modal = document.querySelector('.model')
  const modal_prevent = document.querySelector('.modal-prevent')

  console.log(modal_prevent)

  function openModal(){
      modal.classList.remove('hidden')
      overlay.classList.remove('hidden')
      modal_prevent.classList.add('scroll')
  }

  function closeModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    modal_prevent.classList.remove('scroll')
  }

  document.addEventListener("keydown",function(event){

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }

  })

  overlay.addEventListener('click',closeModal)
  btn_close.addEventListener('click',closeModal)
  btn_open.addEventListener('click',openModal)


  

  



  
