import '../calendar/calendar';
import * as $ from 'jquery';

jQuery(($) => {
  const $cardStart = $('.js-card-booking .js-date-dropdown__first-date');
  const $cardEnd = $('.js-card-booking .js-date-dropdown__second-date');
  function getValueFromElement($element) {
    const text = $element.text();
    return parseInt(text.replace(/\D/g, ''), 10);
  }
  function convertValueToCost(value) {
    let temp1 = temp.toString();
    temp1 = temp1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
  function getDateForCard($firstDate, $secondDate, $card) {
    const dayFirst = new Date(parseInt($firstDate.slice(6), 10), $firstDate.slice(3, 5) - 1, parseInt($firstDate.slice(0, 2), 10));
    const daySecond = new Date(parseInt($secondDate.slice(6), 10), $secondDate.slice(3, 5) - 1, parseInt($secondDate.slice(0, 2), 10));
    const daysDiffer = (daySecond - dayFirst) / (60 * 60 * 24 * 1000);
    const $roomCost = $($card).find('.js-card-booking__room-description');
    const $costPerDay = $($card).find('.js-card-booking__price-value');
    if (daysDiffer === 1) {
      $roomCost.innerHTML = `${$costPerDay.text()}  х ${daysDiffer} сутки`;
    } else {
      $roomCost.innerHTML = `${$costPerDay.text()} х ${daysDiffer} суток`;
    }
    const $roomPrice = $($card).find('.js-card-booking__room-price');
    const temp = getValueFromElement($costPerDay) * daysDiffer;
    console.log(daySecond);
    let temp1 = temp.toString();
    temp1 = temp1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $($roomPrice).text(temp1);
  }
  function roomCost(ev) {
    const $totalCost = $(ev.currentTarget).find('.js-total__price');
    const $roomPrice = $(ev.currentTarget).find('.js-room__price__value');
    const tempRoomPrice = $($roomPrice).text().replace(/\s+/g, '');
    const $discountPrice = $(ev.currentTarget).find('.js-discount__price__value');
    let $tempDiscountPrice = $discountPrice.text();
    $tempDiscountPrice = $tempDiscountPrice.replace('₽', '');
    $tempDiscountPrice = $tempDiscountPrice.replace(/\s+/g, '');
    const $AdditionalPay = $(ev.currentTarget).find('.js-additional__price__value');
    const $selectText = $(ev.currentTarget).find('.js-select__text');
    const selectTextValue = $selectText.text();
    const AddPay = selectTextValue.replace(/\D/g, ''); //берем только цифры
    $($totalCost).html(`${parseInt(tempRoomPrice, 10) + parseInt((AddPay * 100), 10) - parseInt($tempDiscountPrice, 10)}₽`);
    $($AdditionalPay).html(AddPay * 100);
    $totalCost.innerHTML = $($totalCost).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
  function cardInit(index, elem) {
    const $firstDate = $cardStart.val();
    const $secondDate = $cardEnd.val();
    getDateForCard($firstDate, $secondDate, elem);
    roomCost(elem);
  }
  $($cardStart).datepicker().data('datepicker').selectDate(new Date(2019, 7, 19));
  $($cardEnd).datepicker().data('datepicker').selectDate(new Date(2019, 7, 23));
  $('.js-card-booking').click(roomCost);
  $('.js-card-booking').each(cardInit);
});
