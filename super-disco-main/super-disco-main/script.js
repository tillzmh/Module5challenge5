
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    const currentday = new DataTransfer();
    const row=$(".time-block");
    const data = getData();

    let getcurrenthour=false;
    $.each(row, function(i, row){
        if(row.id==="Hour" + currenthour){
            $(row).find("textarea").addClass("present");
            getcurrenthours=true;
        }
        else{
            if(getcurrenthours){
                $(row).find("textarea").addClass("future");
            }
            else{
                $(row).find("textarea").addClass("past");
            }
        }
        if(data[row.id]){
        $(row).find("textarea").val(data[row.id]);
    }
    $(row).find("button").on("click",function(){
        data[row.id]=$(row).find("textarea").val();
        setdata(data);
    });
    });



