window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("div.content-wrapper")
    new Portfolio.Routers.Router({$rootEl: $rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Portfolio.initialize();
  var $tabs = $("a.item")
  $("a.item").on("click", function (event) {
    event.preventDefault();
    var $tab = $(event.currentTarget)
    if ($tab.hasClass("highlighted")) {
      return
    }
    window.Portfolio.setTabs($tab);
    window.Portfolio.route($tab);
  });
  
  window.Portfolio.setTabs = function ($tab) {
    $tabs.removeClass("highlighted");
    $tab.addClass("highlighted");
    
    var $wrapper = $("div.content-wrapper");
    $wrapper.removeClass($wrapper.data("mode"));
    $wrapper.data("mode", $tab.data("mode"));
    $wrapper.addClass($tab.data("mode"));
  }
  
  window.Portfolio.route = function ($tab) {
    var mode = $tab.data("mode")
    switch(mode) {
    case "projects-mode":
      var url = "/" 
      break;
    case "skills-mode":
      var url = "/skills"
      break;
    case "me-mode":
      var url = "/me"
      break;
    }
    Backbone.history.navigate(url, {trigger: true});
  }
  
});
