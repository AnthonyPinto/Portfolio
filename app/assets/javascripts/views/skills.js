/*global Portfolio JST*/

Portfolio.Views.Skills = Backbone.View.extend({
  template: JST["skills"],
  
  className: 'skills',
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderTitle("Skills"); //delay text helper extension
    return this;
  }
});