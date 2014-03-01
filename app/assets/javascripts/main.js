$(document)
	.delegate('form[data-remote]', 'ajax:success', function(e, data, status, xhr){
		var li = $("ul").children(":first").clone();
		li.children(":first").text(data['content']);
		li.children(":last").text(data['company']);
		(li).prependTo$("ul").slideDown("slow");
	})
	.delegate('form[data-remote]', 'ajax:error', function(e, data, status, error) {
		alert('error');
	});
