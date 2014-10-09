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
});
