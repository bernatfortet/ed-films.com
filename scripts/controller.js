(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Controller = (function(superClass) {
    extend(Controller, superClass);

    Controller.prototype.counter = 0;

    function Controller() {
      Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.getTemplate = function(templateName, data) {
      var source, template;
      source = $("#" + templateName).html();
      template = Handlebars.compile(source);
      if (data !== '') {
        return $(template(data));
      } else {
        return $(template());
      }
    };

    return Controller;

  })(Spine.Controller);

}).call(this);
