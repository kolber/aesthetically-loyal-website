$(function() {
	
	// used track all outbound links (ie. any 'a tag' with a 'rel' of 'external')
	var as = $('a[@rel=external]');
	for(var i=0; i < as.length; i++) {
		$(as[i]).click(function() {
			// add analytics call to onclick
			pageTracker._trackPageview('/outgoing/' + $(this).attr("href").replace('http://', ''));
		});
	}
});
