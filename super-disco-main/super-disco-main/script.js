
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    const currentday = new DataTransfer();
    const row=$(".time-block");
    const data = getData();

    let currenthours=false;
    $.each(row, function(i, row){
        if(row.id==="Hour" + currenthour){
            $(row).find("textarea").addClass("present");
            currenthours=true;
        }
        else{
            if(currenthours){
                $(row).find("textarea").addClass("future");
            }
            else{
                $(row).find("textarea").addClass("past");
            }
        }
    });



