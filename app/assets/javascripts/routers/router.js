Portfolio.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "projects",
    "skills" : "skills",
    "me" : "me"
    
  },
  
  projects: function () {
    var view = new Portfolio.Views.Projects();
    this._swapView(view);
  },
  
  skills: function () {
    var view = new Portfolio.Views.Skills();
    this._swapView(view);
  },
  
  me: function () {
    var view = new Portfolio.Views.Me();
    this._swapView(view);
  },
  
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  },
	
  
  
});