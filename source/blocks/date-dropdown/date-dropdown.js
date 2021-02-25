import 'air-datepicker'
jQuery(function($){
	
	var start = $('.first-date');
	var end = $('.second-date');
	
	var RangeDatePicker = $(start).datepicker({
		language : 'my-lang',
		range : true,
		clearButton : true,
		todayButton : true,
		monthsField: 'monthsShort',
		classes : 'date-range-picker',
		prevHtml: '<i class="material-icons md-24">arrow_back</i>',
        nextHtml: '<i class="material-icons md-24">arrow_forward</i>',
            navTitles: {
                days: '<p class="nav-title-text">MM yyyy</p>',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
			},
			onSelect: function (fd,date,ins) {
				function getDateForInput (i) {
					if (date[i] !== undefined) {
						function CheckIfStartsWithZero(num) {
							num = num.toString();
							return num.length === 1 ? '0' + num : num;
						}
						var day = CheckIfStartsWithZero(date[i].getDate());
						var month = CheckIfStartsWithZero(date[i].getMonth()+1);
						return day + '.' + month + '.' + date[i].getFullYear();
					}
				}
				start.val(getDateForInput(0))
				end.val(getDateForInput(1))
			}					
	}).data('datepicker');
	$('.date-range-picker .datepicker--button[data-action="today"]').click(function(){
		RangeDatePicker.hide();
	})
	end.click(function() {	
		$(this).parent('.date__item').parent('.date__bar').find('.first-date').focus();
	 });
	 
})
