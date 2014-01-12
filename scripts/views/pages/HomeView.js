define([
  'views/View',
  'text!templates/homeTemplate.html'
], function (View, homeTemplate) {
  "use strict";

  var HomeView = View.extend({
    initialize: function () {
      console.log('HomeView');
      this.setTemplate();
      View.prototype.initialize.call(this);
    },
    setTemplate: function (settings) {
      this.template = _.template(homeTemplate, settings);
    }
  });
  return HomeView;
});