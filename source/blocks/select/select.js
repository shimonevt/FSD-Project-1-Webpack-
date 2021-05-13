$(document).ready(() => {
  const minValue = 0;
  let selectGueststext = [];
  let selectRoomstext = [];
  const type = {
    guests: 'guests',
    rooms: 'rooms',
  };
  const itemGuests = [
    {
      item: 'guests',
      words: ['', ' гость', ' гостя', ' гостей'],
    },
    {
      item: 'babies',
      words: ['', ' младенец', ' младенца', ' младенцев'],
    },
  ];
  const itemsRooms = [
    {
      item: 'bedrooms',
      words: ['', ' спальня', ' спальни', ' спален'],
    },
    {
      item: 'beds',
      words: ['', ' кровать', ' кровати', ' кроватей'],
    },
    {
      item: 'bathrooms',
      words: ['', ' ванная комната', ' ванные комнаты', ' кроватей'],
    },
  ];
  function writeListGroupText(itemArray, listType, value, stringSelectText) {
    for (let i = 0; i < itemArray.length; i += 1) {
      const { words } = itemArray[i];
      if (itemArray[i].item === listType) {
        let currentText;
        if (value === 0) {
          currentText = words[0];
        } else if (value === 1) {
          currentText = value + words[1];
        } else if (value <= 4) {
          currentText = value + words[2];
        } else {
          currentText = value + words[3];
        }
        stringSelectText[i] = currentText;
        break;
      }
    }
    return stringSelectText;
  }
  function writeSelectText(selectType, listType, selectText, value, stringSelectText) {
    if (selectType === type.guests) {
      const $editButtons = $(selectText).parent('.js-select__body').find('.js-edit-buttons');
      if (value > minValue) {
        $($editButtons).addClass('active');
      }
      stringSelectText = writeListGroupText(itemGuests, listType, value, stringSelectText);
    } else {
      stringSelectText = writeListGroupText(itemsRooms, listType, value, stringSelectText);
    }
    let fullSelectText = '';
    for (let i = 0; i < stringSelectText.length; i += 1) {
      if (fullSelectText.length + stringSelectText.length >= 21) {
        fullSelectText += '...';
        break;
      }
      const condition = i !== 0 && fullSelectText !== '' && stringSelectText[i] !== '';
      if (condition) {
        fullSelectText += ', ';
      }
      fullSelectText += stringSelectText[i];
    }
    if (selectType === type.guests && fullSelectText === '') {
      fullSelectText = 'Сколько гостей';
    } else if( selectType === type.rooms && fullSelectText === '') {
      fullSelectText = 'Выберите комнаты';
    }
    $(selectText).text(fullSelectText);
  }
  function selectInit(index, select) {
    const $selectType = $(select).data('type');
    const $selectText = $(select).find('.js-select__text');
    let sum = 0;
    let notBabies = 0;
    if ($selectType === type.guests) {
      $(select).find('.js-list__group').each((index, listGroup) => {
        const $listType = $(listGroup).data('item');
        const value = parseInt($(listGroup).find('.js-item__count').text(), 10);
        if ($listType === itemGuests[0].item) {
          sum += value;
          writeSelectText($selectType, $listType, $selectText, sum, selectGueststext);
        } else if ($listType === itemGuests[1].item) {
          notBabies += value;
          writeSelectText($selectType, $listType, $selectText, notBabies, selectGueststext);
        }
      });
    } else {
      $(select).find('.js-list__group').each((index, listGroup) => {
        const $listType = $(listGroup).data('item');
        const $value = $(listGroup).find('.js-item__count').text();
        writeSelectText($selectType, $listType, $selectText, $value, selectRoomstext);
      });
    }
  }
  function hideSelectText(event) {
    const $selectDropdown = $(event.target).parent('.js-select__body').parent('.js-select');
    $selectDropdown.toggleClass('active');
  }
  function clickOnEditClear(event) {
    const editButtons = event.target.closest('.js-edit-buttons');
    const $selectBar = $(editButtons).parent('.js-select__bar');
    const $selectText = $($selectBar).parent('.js-select__body').find('.js-select__text');
    const $select = $($selectText).parent('.js-select__body').parent('.js-select');
    const $selectType = $($select).data('type');
    if ($selectType === type.guests) {
      const text = 'Сколько гостей';
      $($selectText).text(text);
    }
    $($select).find('.js-button__minus').each((index, elem) => {
      $(elem).removeClass('active');
    });
    $($select).find('.js-item__count').each((index, elem) => {
      $(elem).text(minValue);
    });
    $(editButtons).removeClass('active');
  }
  function clickOnEditAccept(event) {
    const editAccept = event.target;
    const $selectClose = editAccept.closest('.js-select');
    $selectClose.classList.toggle('active');
  }
  function clickOnButtonsGroup(event) {
    const $buttonsGroup = $(event.target).parent('.js-buttons__group');
    const $itemsCount = $($buttonsGroup).find('.js-item__count');
    const $menuSelect = $($buttonsGroup).parent('.js-list__group').parent('.js-select__list').parent('.js-select__bar');
    const $select = $($menuSelect).parent('.js-select__body').parent('.js-select');
    const $selectText = $($select).find('.js-select__text');
    const $selectType = $($select).data('type');
    const $editButtons = $($menuSelect).children('.js-edit-buttons');
    let $itemValue = parseInt($($itemsCount).text(), 10);
    let numberOfGuests = 0;
    let notBabies = 0;
    if (event.target.classList.contains('js-button__plus')) {
      $itemValue += 1;
      $($itemsCount).text($itemValue);
      $($editButtons).addClass('active');
      if ($itemValue === minValue + 1) {
        $($buttonsGroup).find('.js-button__minus').addClass('active');
      }
    } else {
      $itemValue -= 1;
      if ($itemValue <= minValue) {
        $($itemsCount).text(minValue);
        $($buttonsGroup).find('.js-button__minus').removeClass('active');
      } else {
        $($itemsCount).text($itemValue);
      }
    }
    if ($selectType === type.rooms) {
      $($select).find('.js-list__group').each((index, listGroup) => {
        const $listType = $(listGroup).data('item');
        const $value = parseInt($(listGroup).find('.js-item__count').text(), 10);
        writeSelectText($selectType, $listType, $selectText, $value, selectRoomstext);
      });
    } else {
      $($select).find('.js-list__group').each((index, listGroup) => {
        const $listType = $(listGroup).data('item');
        const $value = $(listGroup).find('.js-item__count').text();
        if ($listType === type.guests) {
          numberOfGuests += +$value;
          writeSelectText($selectType, $listType, $selectText, numberOfGuests, selectGueststext);
        } else {
          notBabies += +$value;
          writeSelectText($selectType, $listType, $selectText, notBabies, selectGueststext);
        }
      });
    }
    if (numberOfGuests + notBabies === 0) {
      $($editButtons).removeClass('active');
    } else {
      $($editButtons).addClass('active');
    }
  }
  $('.js-select').each(selectInit);
  $('.js-select .js-select__text').click(hideSelectText);
  $('.js-edit__clear').click(clickOnEditClear);
  $('.js-edit__accept').click(clickOnEditAccept);
  $('.js-select .js-buttons__group .js-button').click(clickOnButtonsGroup);
});
