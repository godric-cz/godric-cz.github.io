
Hyphenator.config({
	defaultlanguage: 'cs',
	selectorfunction: function () {
		return $('article > *:not(header,h1,h2,h3,h4,h5,h6)').get();
	}
});

$(function(){

	// zvětšování obrázků
	$('p > img:first-child:last-child').load(function(){
		var fw = this.naturalWidth / window.devicePixelRatio;
		var fh = this.naturalHeight / window.devicePixelRatio;
		var ow = this.width;
		var dw = (this.width - fw) / 2;
		var dh = (this.height - fh) / 2;
		var oi = $(this);
		if(!(ow < fw)) { // already fullsize
			return;
		}
		oi.css('cursor', 'pointer');
		oi.parent().css('position', 'relative');
		$(this).click(function(){
			var ni = $(this).clone();
			ni.css({ position:'absolute', top: 0, cursor: 'pointer' });
			oi.after(ni);
			ni.animate({
				width: fw,
				left: dw,
				top: dh
			},{ complete: function(){
				$(this).click(function(){
					$(this).animate({
						width: ow,
						left: 0,
						top: 0
					},{ complete: function(){
						$(this).remove();
					}});
				});
			}});
		});
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
