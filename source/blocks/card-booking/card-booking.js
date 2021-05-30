import '../date-dropdown/date-dropdown';

jQuery(($) => {
  function getValueFromElement($element) {
    const text = $element.text();
    return parseInt(text.replace(/\D/g, ''), 10);
  }
  function convertValueToCost(value, $currency) {
    return `${value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}${$currency}`;
  }
  function getDateForCard(card) {
    const $firstDate = $(card).find('.js-date-dropdown__first-date').val();
    const $secondDate = $(card).find('.js-date-dropdown__second-date').val();
    const dayFirst = new Date(parseInt($firstDate.slice(6), 10), $firstDate.slice(3, 5) - 1, parseInt($firstDate.slice(0, 2), 10));
    const daySecond = new Date(parseInt($secondDate.slice(6), 10), $secondDate.slice(3, 5) - 1, parseInt($secondDate.slice(0, 2), 10));
    const daysDiffer = (daySecond - dayFirst) / (60 * 60 * 24 * 1000);
    return daysDiffer;
  }
  function calcAndWriteRoomCost($card, daysDiffer) {
    const $roomCost = $($card).find('.js-card-booking__room-description');
    const $costPerDay = $($card).find('.js-card-booking__price-value');
    if (Number.isNaN(daysDiffer)) {
      $roomCost.text('Не выбраны даты');
      return 0;
    }
    if (daysDiffer === 1) {
      $roomCost.text(`${$costPerDay.text()}  х сутки`);
    } else {
      $roomCost.text(`${$costPerDay.text()} х ${daysDiffer} суток`);
    }
    const $roomPrice = $($card).find('.js-card-booking__room-price');
    const roomCost = getValueFromElement($costPerDay) * daysDiffer;
    const $currency = $($card).find('.js-card-booking__price-info').data('currency');
    const roomCostText = convertValueToCost(roomCost, $currency); 
    $($roomPrice).text(roomCostText);
    return roomCost;
  }
  function getDiscountValue($card) {
    const $discountPrice = $($card).find('.js-card-booking__discount-description');
    const discountPriceValue = getValueFromElement($discountPrice);
    return discountPriceValue;
  }
  function calcAndWriteAddCost($card) {
    const $additionalPay = $($card).find('.js-card-booking__additional-price');
    const $selectText = $($card).find('.js-select__text').text();
    const numberOfGuests = [0];
    for (let i = 0; i < $selectText.length; i += 1) {
      if (parseInt($selectText[i], 10)) {
        numberOfGuests.push(parseInt($selectText[i], 10));
      }
    }
    const selectTextValue = numberOfGuests.reduce((prevValue, currentValue) => prevValue + currentValue);
    const additionalPayValue = selectTextValue * 100;
    const $currency = $($card).find('.js-card-booking__price-info').data('currency');
    const additionalPayText = convertValueToCost(additionalPayValue, $currency);
    $($additionalPay).text(`${additionalPayText}`);
    return additionalPayValue;
  }
  function calcAndWriteFullCost($card) {
    const daysDiffer = getDateForCard($card);
    const roomPrice = calcAndWriteRoomCost($card, daysDiffer);
    const discountPrice = getDiscountValue($card);
    const additionalPrice = calcAndWriteAddCost($card);
    const $totalPrice = $($card).find('.js-card-booking__total-price');
    const totalPriceValue = roomPrice + additionalPrice - discountPrice;
    const $currency = $($card).find('.js-card-booking__price-info').data('currency');
    $($totalPrice).text(`${convertValueToCost(totalPriceValue, $currency)}`);
  }
  function getEventTarget(ev) {
    if (ev.type === 'click') {
      calcAndWriteFullCost(ev.currentTarget);
    } else {
      const card = ev.target.closest('.card-booking');
      calcAndWriteFullCost(card);
    }
  }
  function cardInit(index, $elem) {
    $($elem).click(getEventTarget);
    const $firstDate = $($elem).find('.js-date-dropdown__first-date');
    $($firstDate).change(getEventTarget);
    calcAndWriteFullCost($elem);
  }
  $('.js-card-booking').each(cardInit);
});
