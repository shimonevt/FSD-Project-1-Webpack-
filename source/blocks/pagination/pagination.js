import 'paginationjs';

jQuery(document).ready(($) => {
  $('.pagination__body').pagination({
    dataSource(done) {
      const result = [];
      for (let i = 1; i < 180; i += 1) {
        result.push(i);
      }
      done(result);
    },
    pageRange: 1,
    pageSize: 12,
    nextText: 'arrow_forward',
    callback(data, pagination) {
      // template method of yourself
      const html = template(data);
      $('.pagination__body').html(html);
    },
  });
});
