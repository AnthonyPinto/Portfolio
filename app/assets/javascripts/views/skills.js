/*global Portfolio JST*/

Portfolio.Views.Skills = Backbone.View.extend({
  template: JST["skills"],
  
  className: 'skills',
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});