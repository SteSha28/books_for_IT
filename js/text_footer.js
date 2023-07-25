$(function() {
    var text = "</books_for_IT>";
    var delay = 130;
    var elem = document.getElementById("result2");
    var exit_str = "";
    var animationId = null;

    var print_text = function(text, elem, delay) {
        exit_str = "";
        elem.innerHTML = "";
        var currentIndex = 0;
    
        var typeCharacter = function() {
          if (currentIndex < text.length) {
            if (text[currentIndex] == "<" || text[currentIndex] == ">" || text[currentIndex] == "/") {
              exit_str += "<font color=\"#808080\">" + text[currentIndex] + "</font>";
            } else {
              exit_str += "<font color=\"#01539d\">" + text[currentIndex] + "</font>";
            }
            elem.innerHTML = exit_str;
            currentIndex++;
            animationId = setTimeout(typeCharacter, delay);
          }
        };
    
        typeCharacter();
      };

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                if(animationId){
                    clearTimeout(animationId);
                }
                print_text(text,elem,delay);
            }
            else{
                elem.innerHTML = "";
                if(animationId){
                    clearTimeout(animationId);
                }
            }
        })
    })

    observer.observe(elem);
});