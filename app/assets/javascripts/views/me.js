/*global Portfolio JST*/

Portfolio.Views.Me = Backbone.View.extend({
  template: JST["me"],
  
  className: 'me',
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderTitle("Me"); //delay text helper extension
    return this;
  }
});