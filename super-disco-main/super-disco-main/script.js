
    $("#currentDay").text(moment().format('dddd, MMMM Do'));



    const currentday = new DataTransfer();
    const row=$(".time-block");
    const data=getJsonData();

    let getcurrenthours=false;
    $.each(row, function(i, row){
        if(row.id==="Hour" + currentday){
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
        if(data){
            $(row).find("textarea").val(data[row.id]);
        }
    $(row).find("button").on("click",function(){
        data[row.id]=$(row).find("textarea").val();
        setdata(data);
    });
    });

function getJsonData(){
    
}


