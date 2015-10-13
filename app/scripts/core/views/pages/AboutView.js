define(function (require) {
    'use strict';

    var _ = require('underscore');
    var PageView = require('core/views/PageView');
    var MenuView = require('core/views/common/MenuView');
    var aboutTemplate = require('text!templates/pages/aboutTemplate.html');

    var AboutView = PageView.extend({
        template: null,
        menuView: null,

        initialize: function () {
            this.render();

            this.menuView = new MenuView();
        },

        render: function () {
            this.template = _.template(aboutTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return AboutView;
});
