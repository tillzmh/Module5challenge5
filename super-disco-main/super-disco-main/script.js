$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    $(".saveBtn").click(function(){
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text);
        localStorage.getItem(time, text);
        
    })








}) 


