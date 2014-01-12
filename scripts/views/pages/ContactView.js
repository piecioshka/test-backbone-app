define([
  'views/View',
  'text!templates/contactTemplate.html'
], function (View, contactTemplate) {
  "use strict";

  var ContactView = View.extend({
    initialize: function () {
      console.log('ContactView');
      this.setTemplate();
      View.prototype.initialize.call(this);
    },
    setTemplate: function (settings) {
      this.template = _.template(contactTemplate, settings);
    }
  });
  return ContactView;
});