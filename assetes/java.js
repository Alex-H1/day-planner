function time(){
    $("#currentday").text(moment().format("MMM Do YY"));
};

function changeBlock(){
    $(".time-block").each(function(){
    var block = parseInt($(this).attr("id").replace("time-",""))
    var current = parsInt(moment().format("H"));

    
        if(block>current){
            $(this).setAttribut(".future");
        }else if(current<block){
            $(this).setAttribut(".past");
        }else{
            $(this).setAttribut(".present");
        }
    })
};