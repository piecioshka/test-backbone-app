define(function (require) {
    'use strict';

    var _ = require('underscore');
    var MenuCollection = require('core/collections/MenuCollection');
    var AbstractView = require('core/views/AbstractView');
    var menuTemplate = require('text!templates/common/menuTemplate.html');

    var MenuView = AbstractView.extend({
        el: '#menu',
        menu: null,

        initialize: function () {
            var menu = this.menu = new MenuCollection();

            menu.add({
                name: 'Home',
                href: '#!/home'
            });
            menu.add({
                name: 'About',
                href: '#!/about'
            });
            menu.add({
                name: 'Contact',
                href: '#!/contact'
            });

            this.render();
        },

        render: function () {
            this.template = _.template(menuTemplate, {
                menu: this.menu
            });

            return AbstractView.prototype.render.call(this);
        }
    });

    return MenuView;
});
