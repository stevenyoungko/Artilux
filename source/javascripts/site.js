var buttons = document.querySelectorAll('[data-scroll-to]')

buttons.forEach(function(element) {

  element.addEventListener('click', event => {
    var target = event.currentTarget.dataset.scrollTo;
    var offset = document.querySelector(target).offsetTop;
    
    window.scroll({
      top: offset,
      behavior: 'smooth'
    })
  })
})

$(function() {

  var duration = 300 
  
  var $menu = $('.popup-menu')
  var $button = $('.navbar-burger')
    .on('click', function() {
      $menu.toggleClass('open')
      if($menu.hasClass('open')) {
        $menu.stop(true).animate({
          left: '0'
        }, duration)
      }
      else{
        $menu.stop(true).animate({
          left: '-100%'
        }, duration)
      }
    })

  var buttons = $('.popup-menu-item').on('click', MoveToLeft)
  
  var close = $('.popup-menu-close').on('click', MoveToLeft)

  function MoveToLeft () {
    $menu.animate({
      left: '-100%'
    }, duration)
    $menu.removeClass('open')
  }
})

// var number = $('[data-number]')
// console.log(number)
var button = $('[data-scroll-to]')
button.on('click',function(event) {
  var numAnim = new CountUp("counter", 0, 50);
  if (!numAnim.error) {
    numAnim.start();
  } else {
    console.error(numAnim.error);
  }
  $('.popup-menu-list a').removeClass('is-active')
  $(this).addClass('is-active')
})


// $(function() {
//   $(window).on('scroll', function () {
//     var scrollDistance = $(window).scrollTop();
//     console.log(scrollDistance)
//     if (scrollDistance > 40) {
//       var numAnim = new CountUp("counter", 0, 50);
//       if (!numAnim.error) {
//         numAnim.start();
//       } else {
//         console.error(numAnim.error);
//       }
//     }
//   })
// })

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var isCounted = false

$(window).on('resize scroll', function () {

  console.log(isCounted)

  if ($('.patents-up').isInViewport()) {
    if (isCounted) return

    var numAnim = new CountUp("counter", 0, 50);

    if (numAnim.error) return

    numAnim.start()
    isCounted = true

  } else {
    if (!isCounted) return

    isCounted = false
  }
});

window.onload  = function () {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: ["#FFBB66", "#EEEE00", "#FF0000", "#FFFFFF"],
    maxParticles: 130,
    sizeVariations: 5,
  });
};











