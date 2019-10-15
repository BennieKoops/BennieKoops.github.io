// Doorhalen wat aangeklikt wordt
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// To-do verwijderen als je op X clickt
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// to-do aanmaken
$("input[type='text'] ").keypress(function (event) {
   if (event.which === 13) {
    // text pakken voor in de nieuwe li
    var todoTekst = $(this).val();
    $(this).val("");
    // nieuwe li maken
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoTekst + "</li>");
   }
    
});