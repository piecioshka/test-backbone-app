define(function (require) {
    'use strict';

    var AbstractCollection = require('core/collections/AbstractCollection');
    var MenuItem = require('core/models/MenuItem');

    var MenuCollection = AbstractCollection.extend({
        model: MenuItem
    });

    return MenuCollection;
});
