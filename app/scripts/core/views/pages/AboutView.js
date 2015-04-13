define([
    'underscore',
    'core/views/PageView',
    'core/views/common/MenuView',
    'text!templates/pages/aboutTemplate.html'
], function (_, PageView, MenuView, aboutTemplate) {
    'use strict';

    var AboutView = PageView.extend({
        template: null,

        initialize: function () {
            console.info('new AboutView');
            this.render();
            new MenuView();
        },

        render: function () {
            this.template = _.template(aboutTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return AboutView;
});
