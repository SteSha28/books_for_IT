$(function() {
    var text = "<books_for_IT>";
    var delay = 130;
    var elem = document.getElementById("result");
    var exit_str = "";

    var print_text = function(text, elem, delay){
        if(text.length > 0){
            if(text[0]=="<" || text[0] == ">"){
                exit_str +="<font color=\#808080\>"+text[0]+"</font>"
            }
            else{
                exit_str +="<font color=\#01539d\>"+text[0]+"</font>"
            }
            elem.innerHTML += exit_str;
            exit_str = "";
            setTimeout(
                function(){
                    print_text(text.slice(1), elem, delay);
                }, delay
            );
        }
    }
    print_text(text,elem,delay)
});
