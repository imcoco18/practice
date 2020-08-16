$(function() {
  $('#menu-nav').hide();
  $('#menu').click(function() {
    $('#menu-nav').show();
  });
});

$(function() {
  var pagetop = $('#page_top');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body, html').animate({ scrollTop:0 }, 500);
    return false;
  });
});

$('.course-item a').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body, html').css('overflow-y', 'hidden');
  return false
});
$('.close-btn').click(function() {
  $('.modal').fadeOut();
  $('body, html').css('overflow-y', 'visible');
  return false
});