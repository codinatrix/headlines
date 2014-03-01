$(document)
	.delegate('form[data-remote]', 'ajax:success', function(e, data, status, xhr){
		var li = $("ul").children(":first").clone();
		li.children(":first").text(data['content']);
		li.children(":last").text(data['company']);
		
		last_li = $("ul").children(":last");
		last_li.remove();
		
		li.prependTo("ul").hide().slideDown("slow");
		var test = 1;
	})
	.delegate('form[data-remote]', 'ajax:error', function(e, data, status, error) {
		alert('error');
	});
