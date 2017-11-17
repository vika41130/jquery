$(document).ready(function() {
	var order = 0;
	var start = $("img:first").attr("order");
	var end = $("img:last").attr("order");
    var next;
    var prev;
	$("img").each(function(){
		if($(this).is(':visible')){
			order = $(this).attr("order");
		}
	})
    $("#next").click(function(){
        $("ul>li").eq(order).removeClass("active");
        order++;
    	if(order > end){
    		order = start;
    	}
    	$("img").hide();
    	$("img").eq(order).show();
        $("ul>li").eq(order).addClass("active");
    	// $("img").fadeOut();
    	// $("img").eq(next).fadeIn();
    });
    
    $("#prev").click(function(){
        $("ul>li").eq(order).removeClass("active");
        order--;
    	if(order < start){
    		order = end;
    	}
    	$("img").hide();
    	$("img").eq(order).show();
        $("img").eq(order).addClass("active");
        $("ul>li").eq(order).addClass("active");
    })
})

// <li onclick="getPaging(this.value)" id="1" value="1">1</li>
// <li onclick="getPaging(this.value)" id="2" value="2">2</li>