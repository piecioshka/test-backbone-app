require.config({
  paths: {
    templates: '../templates',
    underscore: 'vendor/underscore/underscore',
    jquery: 'vendor/jquery/jquery',
    backbone: 'vendor/backbone/backbone',
    text: 'vendor/require/text'
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
  new App();
});
