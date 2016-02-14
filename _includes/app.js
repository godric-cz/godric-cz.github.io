
Hyphenator.config({
	defaultlanguage: 'cs',
	selectorfunction: function () {
		return $('article > *:not(header,h1,h2,h3,h4,h5,h6)').get();
	}
});

$(function(){

	// zvětšování obrázků
	$('p > img:first-child:last-child').each(function(){
		imgZoom(this);
	});

	// dělení slov
	Hyphenator.run();

	// odkazy pryč do nových panelů
	$('a[href^=http]:not([target]), a[href^=mailto]').attr('target', '_blank');

	// scrollování footnotes
	$('a.footnote, a.reversefootnote').click(function() {
		var top = $(
			$(this).attr('href').replace(':', '\\:')
		).offset().top;
		$('html,body').animate({ scrollTop: top }, 1000);
		return false;
	});


});
