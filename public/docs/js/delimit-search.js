/*

	Thanks to Ben Schwarz (http://www.germanforblack.com) for help speeding this code up.

*/

$(function() {
	// focus input
	$('input#keyword-delimit')[0].focus()
	// clear input to counter form content caching
	$('input#keyword-delimit')[0].value = "";
	// delimiting search event
	$('input#keyword-delimit').keyup(function () {
		// setup target and regular expression for search term
		var target = $('.delimit li');
		var search_term = new RegExp(this.value.replace(/\\/g, ''), "ig");
		// hide all delimitable elements
		target.hide();
		// show elements which contain search term
		target.filter(function() {
			return $(this).text().match(search_term);
		}).show();
		// change results number display
		$('span.count')[0].innerHTML = ($('.delimit li:visible').length > 0) ? $('.delimit li:visible').length : "0";
		// wrap text which matches search term with emphasis
		var lis = $('.delimit li span.project-keywords');
		for(var i=0; i < lis.length; i++) {
			lis[i].innerHTML = $(lis[i]).text();
			$(lis[i]).html($(lis[i]).text().replace(search_term, function($1){return "<em>"+$1+"</em>"}));
		}
		// above processes lose focus of the input, so refocus it
		this.focus();
		
		/* 
			Assign an analytics variable to visitors who use the delimit-search
		*/
		
		// simple logic to stop the function being called multiple times
		if(!window.setVar) {
			// assign the 'used-search' variable to the visitor
			pageTracker._setVar("used-search");
			window.setVar = true;
		}
	});
});
