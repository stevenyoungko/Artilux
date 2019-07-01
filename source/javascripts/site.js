// 導覽列按鈕點擊可以移動畫面
var initSmoothScrollTo = function() {
  var buttons = document.querySelectorAll('[data-scroll-to]')

  buttons.forEach(function (element) {

    element.addEventListener('click', event => {
      var target = event.currentTarget.dataset.scrollTo;
      var offset = document.querySelector(target).offsetTop;
      console.log(event.currentTarget.dataset.scrollTo)

      window.scroll({
        top: offset,
        behavior: 'smooth'
      })
    })
  })
}

// 手機版選單滑入效果
var popupMenuMoveToWindow = function() {
  var duration = 300
  var $menu = $('.popup-menu')
  var $button = $('.navbar-burger')
    .on('click', function () {
      $menu.toggleClass('open')
      if ($menu.hasClass('open')) {
        $menu.stop(true).animate({
          left: '0'
        }, duration)
      } else {
        $menu.stop(true).animate({
          left: '-100%'
        }, duration)
      }
    })

  var buttons = $('.popup-menu-item').on('click', MoveToLeft)
  var close = $('.popup-menu-close').on('click', MoveToLeft)

  function MoveToLeft() {
    $menu.animate({
      left: '-100%'
    }, duration)
    $menu.removeClass('open')
  }
}

//畫面移入計時器開始
var viewPortCountUp = function () {
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  var isCounted = false

  $(window).on('resize scroll', function () {

    var counter = $('.patents-up')

    if (counter.length === 0) return
    // console.log(isCounted)

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
}

//手機版選單active效果
var popupMenuActive = function () {
  var button = $('.popup-menu-item')
  button.on('click', function () {
    $('.popup-menu-list a').removeClass('is-active')
    $(this).addClass('is-active')
  })
}

// product頁面的背景效果
var particlesEffective = function () {
  window.onload = _.debounce(function () {
    if (!$('.background').length > 0) return
    Particles.init({
      selector: '.background',
      connectParticles: true,
      color: ["#FFBB66", "#EEEE00", "#FF0000", "#FFFFFF"],
      maxParticles: 130,
      sizeVariations: 5,
    });
  },100)
}

//導覽列滑動效果
var navMenuOnSrollEffective = function () {
  var navMenuItems = $('.navbar-item[data-scroll-to]')

  var activatedNavMenuLine = function (apple) {
    $('.navbar-menu').find('.active').removeClass('active')
    apple.addClass('active')
  }

  $.each(navMenuItems, function (index, element) {

    var itemTarget = element.dataset.scrollTo
    var target = $(itemTarget)
    var targetHeight = target.outerHeight()
    var targetOffsetTop = target.offset().top
    var navbarItem = $(element)
    // var line = $(element).find('.line')
    var headerHeight = $('.header').outerHeight()

    $(window).on('scroll', _.debounce(function () {
      
      var currentScrollDistance = $(window).scrollTop() + headerHeight
      // console.log(currentScrollDistance)
      // if (index === 0 && currentScrollDistance >= headerHeight) {
      //   activatedNavMenuLine(line)
      // }
      if (currentScrollDistance >= targetOffsetTop && currentScrollDistance <= targetHeight + targetOffsetTop) {
        activatedNavMenuLine(navbarItem)
      }
    }, 100))
  })
}

$(function () {
  initSmoothScrollTo()
  popupMenuMoveToWindow()
  viewPortCountUp()
  popupMenuActive()
  particlesEffective()
  navMenuOnSrollEffective()
})

// var patentsCountUp = function() {
//   var button = $('.popup-menu-item')
//   button.on('click', function (event) {
//     var numAnim = new CountUp("counter", 0, 50);
//     if (!numAnim.error) {
//       numAnim.start();
//     } else {
//       console.error(numAnim.error);
//     }
//   })
// }

// var $target = $('.navbar-item')
// $target.on('click',function() {
//   $('.navbar-item div').removeClass('active')
//   $(this).find('.line').addClass('active')
// })

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


// $(window).on('resize scroll', function() {
//   if ($('.section-page').isInViewport()) {
//     $('.navbar-menu a').removeClass('active')
//     $('.navbar-item').addClass('active')
//   }
// })

// var homeLine = $('[data-scroll-to="#home"]').find($('.line'))
// var technologyLine = $('[data-scroll-to="#technology"]').find($('.line'))
// var visionLine = $('[data-scroll-to="#vision"]').find($('.line'))
// var productLine = $('[data-scroll-to="#products"]').find($('.line'))
// var contactLine = $('[data-scroll-to="#contact-us"]').find($('.line'))
// var home = $('#home')
// var technology = $('#technology')
// var vision = $('#vision')
// var product = $('#products')
// var contact = $('#contact-us')
// $(window).on('scroll', function () {
//   var header = $('.header').outerHeight()
//   var scrollDistance = $(window).scrollTop() + header
//   var homeHeight = home.outerHeight()
//   var technologyTop = technology.offset().top
//   var visionTop = technologyTop + technology.outerHeight() 
//   var productTop = visionTop + vision.outerHeight()
//   var contactTop = productTop + product.outerHeight() 

//   if (header <= scrollDistance) {
//     homeLine.addClass('active')
//   }

//   if (homeHeight <= scrollDistance) {
//     homeLine.removeClass('active')
//   }
  
//   if (technologyTop <= scrollDistance) {
//     technologyLine.addClass('active')
//   }

//   if (visionTop <= scrollDistance) {
//     technologyLine.removeClass('active')
//     visionLine.addClass('active')
//   }

//   if (scrollDistance <= technologyTop) {
//     technologyLine.removeClass('active')
//   }

//   if (productTop <= scrollDistance) {
//     visionLine.removeClass('active')
//     productLine.addClass('active')
//   }

//   if (scrollDistance <= visionTop) {
//     visionLine.removeClass('active')
//   }

//   if (scrollDistance <= productTop) {
//     productLine.removeClass('active')
//   }

//   if (scrollDistance <= contactTop) {
//     contactLine.removeClass('active')
//   }

//   if (contactTop <= scrollDistance) {
//     productLine.removeClass('active')
//     contactLine.addClass('active')
//   }
// })













