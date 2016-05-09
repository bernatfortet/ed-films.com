(function() {
  var showSubscribedAlert;

  $(document).ready(function() {
    var hash;
    hash = window.location.hash;
    if (hash = 'subscribed') {
      return showSubscribedAlert();
    }
  });

  showSubscribedAlert = function() {
    return alert('Subscribed');
  };

}).call(this);
