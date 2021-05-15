import '../calendar/calendar';

jQuery(($) => {
  const $cardStart = $('.js-card-booking .js-first-date');
  const $cardEnd = $('.js-card-booking .js-second-date');
  const CardRangeDatePicker = $($cardStart).datepicker({
    language: 'my-lang',
    range: true,
    clearButton: true,
    todayButton: true,
    monthsField: 'monthsShort',
    classes: 'js-date-range-picker date-range-picker',
    prevHtml: '<i class="material-icons md-24">arrow_back</i>',
    nextHtml: '<i class="material-icons md-24">arrow_forward</i>',
    navTitles: {
      days: '<p class="nav-title-text">MM yyyy</p>',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
    onSelect(fd, date, ins) {
      function CheckIfStartsWithZero(num) {
        const newNum = num.toString();
        return newNum.length === 1 ? `0${num}` : num;
      }
      function getDateForInput(i) {
        if (date[i] !== undefined) {
          const day = CheckIfStartsWithZero(date[i].getDate());
          const month = CheckIfStartsWithZero(date[i].getMonth() + 1);
          return `${day}.${month}.${date[i].getFullYear()}`;
        }
      }
      $cardStart.val(getDateForInput(0));
      $cardEnd.val(getDateForInput(1));
    },
  }).data('datepicker');
  $($cardStart).datepicker().data('datepicker').selectDate(new Date(2019, 7, 19));
  $($cardEnd).datepicker().data('datepicker').selectDate(new Date(2019, 7, 23));
  function getDateForCard(firstDate, secondDate) {
    const dayFirst = new Date(parseInt(firstDate.slice(6), 10), firstDate.slice(3, 5) - 1, parseInt(firstDate.slice(0, 2), 10));
    const daySecond = new Date(parseInt(secondDate.slice(6), 10), secondDate.slice(3, 5) - 1, parseInt(secondDate.slice(0, 2), 10));
    const daysDiffer = (daySecond - dayFirst) / (60 * 60 * 24 * 1000);
    const roomCosts = document.querySelector('.js-room__description');
    const costPerDay = document.querySelector('.js-info__price > p.js-cost');
    // вывод стоимости номера и отеля
    if (daysDiffer === 1) {
      roomCosts.innerHTML = `${costPerDay.innerHTML}₽ х ` + ` х ${daysDiffer} сутки`;
    } else {
      roomCosts.innerHTML = `${costPerDay.innerHTML}₽ х ${daysDiffer} суток`;
    }
    // подсчет полной стоимости и вывод
    const roomPrice = document.querySelector('.room__price > div');
    const temp = costPerDay.innerHTML.replace(/\s+/g, '') * daysDiffer;
    let temp1 = temp.toString();
    temp1 = temp1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    roomPrice.innerHTML = temp1;
  }

  function roomCost(card) {
    const $totalCost = $(card).find('.js-total__price');
    const $roomPrice = $(card).find('.js-room__price__value');
    const tempRoomPrice = $($roomPrice).text().replace(/\s+/g, '');
    const $discountPrice = $(card).find('.js-discount__price__value');
    let tempDiscountPrice = $discountPrice.text();
    tempDiscountPrice = tempDiscountPrice.replace('₽', '');
    tempDiscountPrice = tempDiscountPrice.replace(/\s+/g, '');
    const $AdditionalPay = $(card).find('.js-additional__price__value');
    const $selectText = $(card).find('.js-select__text');
    const selectTextValue = $selectText.text();
    const AddPay = selectTextValue.replace(/\D/g, '');
    $($totalCost).html(`${parseInt(tempRoomPrice, 10) + parseInt((AddPay * 100), 10) - parseInt(tempDiscountPrice, 10)}₽`);
    $($AdditionalPay).html(AddPay * 100);
    $totalCost.innerHTML = $($totalCost).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
  $('.js-card-booking.card').click((ev) => {
    roomCost(ev.currentTarget);
  });
  $('.js-card-booking.card').each((i, elem) => {
    const firstDate = $cardStart.val();
    const secondDate = $cardEnd.val();
    getDateForCard(firstDate, secondDate);
    roomCost(elem);
  });
  $($cardEnd).click((ev) => {
    const $card = ev.target.closest('.js-card-booking');
    const $firstDate = $($card).find('.js-first-date');
    $firstDate.focus();
  });
  $('.js-date-range-picker .datepicker--button[data-action="today"]').click(() => {
    CardRangeDatePicker.hide();
    const firstDate = $cardStart.val();
    const secondDate = $cardEnd.val();
    const $card = $cardStart.closest('.js-card-booking');
    getDateForCard(firstDate, secondDate);
    roomCost($card);
  });
});
