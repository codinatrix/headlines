$(document)
	.delegate('form[data-remote]', 'ajax:beforeSend', function(){
		$(".alert").fadeTo(200, 0);
	})
	.delegate('form[data-remote]', 'ajax:success', function(e, data, status, xhr){
		var li = $("ul").children(":first").clone();
		li.children(":first").text(data['content']);
		li.children(":last").text(data['company']);
		
		last_li = $("ul").children(":last");
		last_li.remove();
		
		li.prependTo("ul").hide().slideDown("slow");
	})
	.delegate('form[data-remote]', 'ajax:error', function(e, data, status, error) {
		var error_el = $(".alert").first();
		var response = $.parseJSON(data.responseText)['errors'];
		for(var key in response) {
			error_el.text('Headline ' + response[key]);
			break;
		}
		$(".alert").fadeTo(200, 1);

	});


$(function(){
		$('#theCounter').textCounter({
			target: '#headline_content',
			count: 100,
			warnAt: 10
		});
	});



