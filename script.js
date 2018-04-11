$(document).ready(function() {
    
    function changePosition(change, element) {
        element.find("li").each(function(i, item) {
            let current = parseInt(
                $(item)
                    .attr("class")
                    .replace(/\D/g, "")
            );
            let future;
            if(change==="increment"){
               future = current < 5 ? current + 1 : 1;  
            }
            if(change==="decrement"){
               future = current  >1 ? current - 1 : 5;  
            }
            
            classname = "pos" + future;
            $(item)
                .removeClass()
                .addClass("items")
                .addClass(classname);
        });
    }

    $(".portfolio-slideshow-wrapper .next").click(function() {
        changePosition("increment", $(this).parent());
    });
    
    $(".portfolio-slideshow-wrapper .prev").click(function() {
        changePosition("decrement", $(this).parent());
    });
});
