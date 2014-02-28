define([
    'backbone',
    'views/pages/HomeView',
    'views/pages/AboutView',
    'views/pages/ContactView'
], function (Backbone, HomeView, AboutView, ContactView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '!/about':      'showAbout',
            '!/contact':    'showContact',
            '!/home':       'showHome'
        },

        showHome: function () {
            new HomeView();
        },
        
        showAbout: function () {
            new AboutView();
        },
        
        showContact: function () {
            new ContactView();
        }
    });

    return {
        initialize: function () {
            new AppRouter();

            Backbone.history.start();

            if (!Backbone.history.getHash().length) {
                Backbone.history.navigate('!/home', {
                    trigger: true
                });
            }
        }
    }
});
