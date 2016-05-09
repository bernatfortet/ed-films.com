(function() {
  var App,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  App = (function(superClass) {
    extend(App, superClass);

    function App() {
      var data;
      App.__super__.constructor.apply(this, arguments);
      console.log('Hello World');
      data = {
        name: "bernat"
      };
      this.el.append(this.getTemplate('Template', data));
    }

    return App;

  })(Controller);

  $(document).ready(function() {
    var app;
    return app = new App({
      el: $('#App')
    });
  });

}).call(this);
