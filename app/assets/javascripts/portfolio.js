window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function() {
    var $rootEl = $("div.content-wrapper")
    new Portfolio.Routers.Router({$rootEl: $rootEl});
    Backbone.history.start();
  },
  
  setTabs: function ($tab) {
    $("a.item").removeClass("highlighted");
    $tab.addClass("highlighted");
    
    var $wrapper = $("div.content-wrapper");
    $wrapper.removeClass($wrapper.data("mode"));
    $wrapper.data("mode", $tab.data("mode"));
    $wrapper.addClass($tab.data("mode"))
  },
};

$(document).ready(function(){
  Portfolio.initialize();
  $("a.item").on("click", function (event) {
    var $tab = $(event.currentTarget)
    if ($tab.hasClass("highlighted")) {
			event.preventDefault();
      return
    }
  });
  
});
