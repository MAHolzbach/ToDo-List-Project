$("li").click(function(){
  $(this).toggleClass("strikeout");
});

$(".trash").click(function(e){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});
