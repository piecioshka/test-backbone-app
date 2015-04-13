define([
    'underscore',
    'core/collections/MenuCollection',
    'core/views/AbstractView',
    'text!templates/common/menuTemplate.html'
], function (_, MenuCollection, AbstractView, menuTemplate) {
    "use strict";

    var MenuView = AbstractView.extend({
        el: "#menu",
        menu: null,

        initialize: function () {
            var menu = this.menu = new MenuCollection();
            menu.add({ name: "Home", href: "#!/home" });
            menu.add({ name: "About", href: "#!/about" });
            menu.add({ name: "Contact", href: "#!/contact" });
            this.render();
        },

        render: function () {
            this.template = _.template(menuTemplate, {
                menu: this.menu
            });
            AbstractView.prototype.render.call(this);
        }
    });

    return MenuView;
});
