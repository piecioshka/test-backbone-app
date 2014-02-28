define([
    'backbone'
], function (Backbone) {
    'use strict';

    var AbstractView = Backbone.View.extend({
        render: function () {
            this.$el.html(this.template);
        }
    });

    return AbstractView;
});