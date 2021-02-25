import 'ion-rangeslider'
jQuery(document).ready(function($){ 
    var $inputFrom = $(".values-from");
	var $inputTo = $(".values-to"); 
	var track = function (data) {
		$inputFrom.html(data.from + " ₽ -");
		$inputTo.html(" " + data.to + " ₽");
	};
	$(".range-slider__body").ionRangeSlider({
        type: "double",
        min: 0,
        max: 15000,
        from: 5000,
		to: 10000,
		step : 100,
		onStart: track,
            onChange: track,
            onFinish: track,
            onUpdate: track
		
	});
})