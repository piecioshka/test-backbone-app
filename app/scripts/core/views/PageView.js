define(function (require) {
    'use strict';

    var AbstractView = require('core/views/AbstractView');

    var PageView = AbstractView.extend({
        el: '#content'
    });

    return PageView;
});
