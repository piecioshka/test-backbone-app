define(function (require) {
    'use strict';

    var _ = require('underscore');
    var PageView = require('core/views/PageView');
    var MenuView = require('core/views/common/MenuView');
    var homeTemplate = require('text!templates/pages/homeTemplate.html');

    var HomeView = PageView.extend({
        template: null,
        menuView: null,

        initialize: function () {
            this.render();

            this.menuView = new MenuView();
        },

        render: function () {
            this.template = _.template(homeTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return HomeView;
});
