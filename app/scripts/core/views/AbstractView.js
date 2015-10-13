define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var AbstractView = Backbone.View.extend({
        render: function () {
            this.$el.html(this.template);
        }
    });

    return AbstractView;
});
