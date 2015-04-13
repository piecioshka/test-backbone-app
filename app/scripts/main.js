require.config({
    paths: {
        underscore: 'vendor/underscore/underscore',
        jquery: 'vendor/jquery/jquery',
        backbone: 'vendor/backbone/backbone',
        text: 'vendor/require/text'
    },

    map: {
        '*': {
            templates: '../../../../templates'
        }
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});

require([
    'app'
], function (App) {
    'use strict';

    new App();
});
