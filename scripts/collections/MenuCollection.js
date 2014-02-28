define([
    'collections/AbstractCollection',
    'models/MenuItem'
], function (AbstractCollection, MenuItem) {
    "use strict";

    var MenuCollection = AbstractCollection.extend({
        model: MenuItem
    });

    return MenuCollection;
});