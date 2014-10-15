Portfolio.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "projects" : "projects",
    "skills" : "skills",
    "me" : "me"
    
  },
  
  projects: function () {
    window.Portfolio.setTabs($("a.projects-mode"))
    var view = new Portfolio.Views.Projects();
    this._swapView(view);
  },
  
  skills: function () {
    window.Portfolio.setTabs($("a.skills-mode"))
    var view = new Portfolio.Views.Skills();
    this._swapView(view);
  },
  
  me: function () {
    window.Portfolio.setTabs($("a.me-mode"))
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