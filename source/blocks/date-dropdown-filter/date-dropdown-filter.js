jQuery(($) => {
  const $filterDate = $('.js-dropdown-filter__input');
  const DatePickerFilter = $filterDate.datepicker({
    language: 'my-lang',
    autoClose: false,
    range: true,
    clearButton: true,
    todayButton: true,
    multipleDates: true,
    classes: 'date-range-picker-filter js-date-range-picker-filter',
    monthsField: 'monthsShort',
    dateFormat: 'd M',
    multipleDatesSeparator: ' - ',
    prevHtml: '<i class="material-icons md-24">arrow_back</i>',
    nextHtml: '<i class="material-icons md-24">arrow_forward</i>',
    navTitles: {
      days: '<p class="nav-title-text">MM yyyy</p>',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
  }).data('datepicker');
  $('.js-date-range-picker-filter .datepicker--button[data-action="today"]').click(() => {
    DatePickerFilter.hide();
  });
  $('.js-dropdown-filter').click((ev) => {
	  console.log('ok');
    DatePickerFilter.show();
  });
  $($filterDate).datepicker().data('datepicker').selectDate(new Date(2019, 7, 19));
  $($filterDate).datepicker().data('datepicker').selectDate(new Date(2019, 7, 23));
});
