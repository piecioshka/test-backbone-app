define([
    'underscore',
    'core/views/PageView',
    'core/views/common/MenuView',
    'text!templates/pages/homeTemplate.html'
], function (_, PageView, MenuView, homeTemplate) {
    'use strict';

    var HomeView = PageView.extend({
        template: null,

        initialize: function () {
            console.info('new HomeView');
            this.render();
            new MenuView();
        },

        render: function () {
            this.template = _.template(homeTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return HomeView;
});
