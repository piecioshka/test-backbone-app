define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var HomeView = require('core/views/pages/HomeView');
    var AboutView = require('core/views/pages/AboutView');
    var ContactView = require('core/views/pages/ContactView');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '!/about': 'showAbout',
            '!/contact': 'showContact',
            '!/home': 'showHome'
        },

        showHome: function () {
            return new HomeView();
        },

        showAbout: function () {
            return new AboutView();
        },

        showContact: function () {
            return new ContactView();
        }
    });

    return {
        initialize: function () {
            var router = new AppRouter();

            Backbone.history.start();

            if (!Backbone.history.getHash().length) {
                Backbone.history.navigate('!/home', {
                    trigger: true
                });
            }

            return router;
        }
    };
});
