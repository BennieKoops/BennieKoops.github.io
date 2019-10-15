// Doorstrepen wat aangeklikt wordt
// Strikethrough what is clicked
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// To-do verwijderen als je op trashcan clickt
// Delete to-do when clicking trashcan
$("ul").on("click", "span.RI", function(event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// nieuwe to-do aanmaken
// make new to-do
$("input[type='text']").keypress(function (event) {
   if (event.which === 13) {
    // text pakken voor in de nieuwe li
    var todoTekst = $(this).val();
    $(this).val("");
    // nieuwe li maken
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoTekst + "</li>");
   }
});

// schakel de zichtbaarheid van het invoerveld in door op het pluspictogram te klikken
// toggle visibility of input field by clicking plus icon
$("span.Show").click(function () {
    $("input[type='text']").fadeToggle();
});