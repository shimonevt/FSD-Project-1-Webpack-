import * as $ from 'jquery';
import 'paginationjs';

$(document).ready(() => {
  const $pagination = $('.js-pagination__body');
  if ($pagination.length) {
    $pagination.pagination({
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
    });
  }
});
