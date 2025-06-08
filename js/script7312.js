


$(document).ready(function() {
  var prevScrollPos = $(window).scrollTop();

  $(window).scroll(function() {
    var currentScrollPos = $(window).scrollTop();

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      $('.header').removeClass('hidden');
    } else {
      // Scrolling down
      $('.header').addClass('hidden');
    }

    if (currentScrollPos > 150) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }

    prevScrollPos = currentScrollPos;
  });
});
