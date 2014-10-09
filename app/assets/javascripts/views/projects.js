/*global Portfolio JST*/

Portfolio.Views.Projects = Backbone.View.extend({
  template: JST["projects"],
  
  className: 'projects',
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});