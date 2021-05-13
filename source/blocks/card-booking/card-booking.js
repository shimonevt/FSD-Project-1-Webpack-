import '../calendar/calendar';

jQuery(function($){
    const cardStart = $('.js-card-booking .js-first-date');
	const cardEnd = $('.js-card-booking .js-second-date');
	const RangeDatePicker = $(cardStart).datepicker({
		language : 'my-lang',
		range : true,
		clearButton : true,
		todayButton : true,
		monthsField: 'monthsShort',
		classes : 'js-date-range-picker date-range-picker',
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
				cardStart.val(getDateForInput(0))
				cardEnd.val(getDateForInput(1))
			}					
	}).data('datepicker');
	$(cardStart).datepicker().data('datepicker').selectDate(new Date(2019, 7, 19))
	$(cardEnd).datepicker().data('datepicker').selectDate(new Date(2019, 7, 23))
    $('.js-date-range-picker .datepicker--button[data-action="today"]').click(function(){
		RangeDatePicker.hide();
		const firstDate = cardStart.val();
		const secondDate = cardEnd.val();
		getDateForCard(firstDate,secondDate);
    })
	function getDateForCard(firstDate,secondDate) {
		const day_1 = new Date(parseInt(firstDate.slice(6)), firstDate.slice(3,5)-1, parseInt(firstDate.slice(0,2))),
    	day_2 = new Date(parseInt(secondDate.slice(6)), secondDate.slice(3,5)-1, parseInt(secondDate.slice(0,2)));		
		const daysDiffer = (day_2 - day_1) / (60 * 60 * 24 * 1000);
		const roomCosts = document.querySelector('.room__description');
		const costPerDay = document.querySelector('.info__price > p.cost');
		//вывод стоимости номера и отеля
		if (daysDiffer === 1) {
			roomCosts.innerHTML = costPerDay.innerHTML + '₽ х ' + ' х '  +  daysDiffer + ' сутки';
		} else {
			roomCosts.innerHTML = costPerDay.innerHTML +  '₽ х '  +  daysDiffer + ' суток'; 
		}		
		//подсчет полной стоимости и вывод
		const roomPrice = document.querySelector('.room__price > div');
		const temp = costPerDay.innerHTML.replace(/\s+/g, '')*daysDiffer;
		let temp1 = temp.toString();
		temp1 = temp1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		roomPrice.innerHTML = temp1;
	}
	
	$('.card-booking.card').each(function(i,elem){
		const firstDate = cardStart.val();
		const secondDate = cardEnd.val();
		getDateForCard(firstDate,secondDate);
		roomCost(elem);
	})
    $('.card-booking.card').click(function(){
        roomCost(this);
    })
    function roomCost (card){
            let totalCost = document.querySelector('.costs__total > .total__price'); 
            let roomPrice = document.querySelector('.room__price > div'); 
            let tempRPrice  = roomPrice.innerHTML.replace(/\s+/g, '');
            let discountPrice = document.querySelector('.discount__description > div');
            let tempDPrice = discountPrice.innerHTML;
            tempDPrice = tempDPrice.replace('₽',''); 
            tempDPrice = tempDPrice.replace(/\s+/g, ''); 
            let AdditionalPay = document.querySelector('.additional__price > div');	
            let selectText = $(card).find('.select__text');
            let tmp = selectText.text();
            let AddPay = tmp.replace(/\D/g, '');
            totalCost.innerHTML = parseInt(tempRPrice) + parseInt(AddPay*100) - parseInt(tempDPrice) + '₽';
            AdditionalPay.innerHTML = AddPay*100 ;
            totalCost.innerHTML = totalCost.innerHTML.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    };
	cardEnd.click(function() {	
		$(this).parent('.date__item').parent('.date__bar').find('.first-date').focus();
	 });
});