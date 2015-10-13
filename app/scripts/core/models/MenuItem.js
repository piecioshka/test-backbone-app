define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var MenuItem = Backbone.Model.extend({
        defaults: {
            name: 'no name',
            href: ''
        }
    });

    return MenuItem;
});
