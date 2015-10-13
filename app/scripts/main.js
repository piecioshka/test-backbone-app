require.config({
    baseUrl: './scripts/',

    paths: {
        underscore: 'vendor/underscore/underscore',
        jquery: 'vendor/jquery/jquery',
        backbone: 'vendor/backbone/backbone',
        text: 'vendor/require/text'
    },

    map: {
        '*': {
            templates: 'core/../../templates'
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
    },

    deps: [
        './app'
    ]
});
