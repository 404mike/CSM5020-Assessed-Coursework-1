$(document).ready(function(){
  
  $('.essay_link').click(function(){
    var ref = $(this).data('ref');
    $('.ref').removeClass('active_link')
    $('#'+ref).addClass('active_link');
    $('html,body').animate({
      scrollTop: $("#"+ref).offset().top - 30
   });
  });


  $('.top').click(function(){
    $('html,body').animate({
      scrollTop: 0
   });
  });
});