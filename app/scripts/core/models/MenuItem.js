define([
    'backbone'
], function (Backbone) {
    "use strict";

    var MenuItem = Backbone.Model.extend({
        defaults: {
            name: 'no name',
            href: ""
        }
    });

    return MenuItem;
});
