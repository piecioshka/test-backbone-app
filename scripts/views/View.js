define([
  'backbone'
], function (Backbone) {
  "use strict";

  var View = Backbone.View.extend({
    el: '#app',
    template: null,
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template);
    }
  });
  return View;
});