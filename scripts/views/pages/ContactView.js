define([
    'underscore',
    'views/PageView',
    'views/common/MenuView',
    'text!templates/pages/contactTemplate.html'
], function (_, PageView, MenuView, contactTemplate) {
    'use strict';

    var ContactView = PageView.extend({
        template: null,

        initialize: function () {
            console.info('new ContactView');
            this.render();
            new MenuView();
        },

        render: function () {
            this.template = _.template(contactTemplate);
            PageView.prototype.render.call(this);
        }
    });

    return ContactView;
});