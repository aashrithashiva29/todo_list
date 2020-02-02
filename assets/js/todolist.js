//check specific todos by clicking
$("ul").on("click","li",function(){
        $(this).toggleClass("completed");  
});

//click on x to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event){
    //13 is Char code for 'enter' key!!
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText +"</li>");
    }
});

//toggle add todo icon
$(".fa-pencil").click(function(){
    $("input[type='text']").fadeToggle();
})
