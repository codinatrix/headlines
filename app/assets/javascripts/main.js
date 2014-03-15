$(document)
	.delegate('form[data-remote]', 'ajax:beforeSend', function(){
		
		$(".alert").fadeTo(200, 0);
		
		var content = $(this).find('#headline_content');
		var company = $(this).find('#headline_company');
		var link = $(this).find('#headline_link');
		var content_text = content.val();
		var company_text = company.val();
		var link_text = link.val();
		
		var li = $("ul").children(":first").clone();
		li.children(":first").text(content_text);
		li.children(":last").attr("href", link_text);
		li.children(":last").children(":first").text(company_text);
		
		last_li = $("ul").children(":last");
		last_li.remove();
		
		li.prependTo("ul").hide().slideDown("slow");
	})
	.delegate('form[data-remote]', 'ajax:success', function(){
		$('form')[0].reset();
	})
	.delegate('form[data-remote]', 'ajax:error', function(e, data, status, error) {
		var error_el = $(".alert").first();
		if (data.status == 422)  {
			var response = $.parseJSON(data.responseText)['errors'];
			for(var key in response) {
				error_el.text(humanFieldName(key) + ' ' + response[key]);
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

function humanFieldName(attr) {
	  switch(attr) {
	    case 'company':
	      return 'Company name';
	 
	    case 'link':
	      return 'Link';
	 
	    default:
	      return 'Headline';
	  }
}

function goTop() {
	$('html, body').animate({
        scrollTop: $(".pagination_wrap").offset().top
    }, 300);
}

$(document).ready(function(){
   var tooltip = $('#page_desc').text();
   $('#why').tooltip({ content: tooltip });
});
