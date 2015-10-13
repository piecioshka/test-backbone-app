define(function (require) {
    'use strict';

    var _ = require('underscore');
    var PageView = require('core/views/PageView');
    var MenuView = require('core/views/common/MenuView');
    var contactTemplate = require('text!templates/pages/contactTemplate.html');

    var ContactView = PageView.extend({
        template: null,
        menuView: null,

        initialize: function () {
            this.render();

            this.menuView = new MenuView();
        },

        render: function () {
            this.template = _.template(contactTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return ContactView;
});
