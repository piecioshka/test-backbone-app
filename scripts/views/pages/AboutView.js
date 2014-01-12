define([
  'views/View',
  'text!templates/aboutTemplate.html'
], function (View, aboutTemplate) {
  "use strict";

  var AboutView = View.extend({
    initialize: function () {
      console.log('AboutView');
      this.setTemplate();
      View.prototype.initialize.call(this);
    },
    setTemplate: function (settings) {
      this.template = _.template(aboutTemplate, settings);
    }
  });
  return AboutView;
});