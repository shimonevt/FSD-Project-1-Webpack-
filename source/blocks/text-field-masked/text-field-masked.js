import 'cleave.js';
jQuery(function($){
    if ($('.masked-text-field').length) {
        new Cleave('.masked-text-field', {
                date: true,
                delimiter: '.',
                datePattern: ['d', 'm', 'Y']
            });
    }
    
});
