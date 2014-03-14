$(document)
	.delegate('form[data-remote]', 'ajax:beforeSend', function(){
		
		$(".alert").fadeTo(200, 0);
		
		var content = $(this).find('#headline_content');
		var company = $(this).find('#headline_company');
		var content_text = content.val();
		var company_text = company.val();
		content.val('');
		company.val('');
		
		var li = $("ul").children(":first").clone();
		li.children(":first").text(content_text);
		li.children(":last").text(company_text);
		
		last_li = $("ul").children(":last");
		last_li.remove();
		
		li.prependTo("ul").hide().slideDown("slow");
	})
	.delegate('form[data-remote]', 'ajax:error', function(e, data, status, error) {
		var error_el = $(".alert").first();
		if (data.status == 422)  {
			var response = $.parseJSON(data.responseText)['errors'];
			for(var key in response) {
				error_el.text('Headline ' + response[key]);
				break;
			}
		}
		else {
			error_el.text("Oh no! We're having technical difficulties right now.");
		}
		
		first_li = $("ul").children(":first");
		
		first_li.remove();
		
		$(".alert").fadeTo(200, 1);

	});


$(function(){
		$('#theCounter').textCounter({
			target: '#headline_content',
			count: 100,
			warnAt: 0
		});
	});


function goTop() {
	$('html, body').animate({
        scrollTop: $(".pagination_wrap").offset().top
    }, 300);
}
