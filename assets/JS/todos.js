$("ul").on("click", "li", function(){
  $(this).toggleClass("strikeout");
});

$("ul").on("click", ".trash", function(e){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span class='trash'>X</span> " + todoText + "</li>");
  }
});
