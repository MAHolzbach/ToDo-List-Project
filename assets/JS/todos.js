var doneIndex = 0;
var deleteIndex = 1;
var addIndex = 1;

$("ul").on("click", "li", function(){
  if($(this).hasClass("strikeout")) {
    doneIndex--;
  } else {
    doneIndex++;
  }
  $(this).toggleClass("strikeout");
  $("#done").html(doneIndex);
});

$("ul").on("click", ".trash", function(e){
  $(this).parent().fadeOut(function(){
    $(this).remove();
    $("#deleted").html(deleteIndex);
    deleteIndex++;
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    $("#added").html(addIndex);
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span class='trash'><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    addIndex++;
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
