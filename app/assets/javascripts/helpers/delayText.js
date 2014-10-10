_.extend(Backbone.View.prototype, {
  delayedText: function(options) {
    var element = options.element;
    var delay = options.delay;
    var text = options.text;
    var view = this
    if (text.length > 0) {
      element.append(text[0]);
      setTimeout(
        function(){
          view.delayedText({
            text: text.slice(1),
            element: element,
            delay: delay
          });            
        },
        delay                 
      );
    }
  },
  
  renderTitle: function (text) {
    var $title = this.$(".mode-title")
    $title.fadeIn( "slow", function() {
    // Animation complete
    });
    setTimeout(
      this.delayedText({
        text: text,
        delay: 50,
        element: $title
      }),
      500
    )
  }    
});
