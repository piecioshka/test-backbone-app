define([
    'core/views/AbstractView'
], function (AbstractView) {
    'use strict';

    var PageView = AbstractView.extend({
        el: '#content'
    });

    return PageView;
});
