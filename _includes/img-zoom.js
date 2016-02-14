
var imgZoom = function(img) {
	if(img.naturalWidth > 0) {
		// loaded, apply zoomer
		imgZoomReal(img);
	} else {
		// wait for load, apply then
		$(img).load(function(){ imgZoomReal(this); });
	}
}

var imgZoomReal = function(img) {
	var fw = img.naturalWidth / window.devicePixelRatio;
	var fh = img.naturalHeight / window.devicePixelRatio;
	var ow = img.width;
	var dw = (img.width - fw) / 2;
	var dh = (img.height - fh) / 2;
	var oi = $(img);
	if(!(ow < fw)) { // already fullsize
		return;
	}
	oi.css('cursor', 'pointer');
	oi.parent().css('position', 'relative');
	oi.click(function(){
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
}
