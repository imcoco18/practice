// $('header a').hover(
//   function(){
//     $('')
//   },
//   function(){

// });

$(function(){
  $('.feature-box img').hover(
    function(){
      $(this).animate({
        'width':'400px'
      },300);
    },
    function(){
      $(this).animate({
        'width':'350px'
      },300);
    }
    );

});