$(document).ready(function(){
	$('#sort_price').mouseup(function() {
		var open = $(this).data("isopen1");
	    if(open) {
			$("input[name=sort_select][value='price']").attr('checked',true); 	
		}
	    $(this).data("isopen1", !open);
	});

	$('#sort_name').mouseup(function() {
		var open = $(this).data("isopen2");
	    if(open) {
	        $("input[name=sort_select][value='name']").attr('checked',true); 
	    }
	    $(this).data("isopen2", !open);
	});
});
