(function() {
  var closeVideoModal, showModal, showSubscribedAlert;

  $(document).ready(function() {
    var hash;
    hash = window.location.hash;
    if (hash === '#subscribed') {
      showSubscribedAlert();
    } else if (hash === '#trailer') {
      openVideoModal();
    }
    $('body').on('click', '.openEventbriteModal', function() {
      return showModal('eventbriteIframe');
    });
    $('body').on('click', '.openVideoModal', function() {
      showModal('videoIframe');
      $('.videoIframe').height($('.videoIframe').width() * 0.5625);
      return $(".videoIframe")[0].src += "&autoplay=1";
    });
    return $('body').on('click', '.closeVideoModal', closeVideoModal);
  });

  showSubscribedAlert = function() {
    $('.alert').show();
    return setTimout(function() {
      return $('.alert').hide();
    }, 5000);
  };

  showModal = function(iframe) {
    $('.overlay').css('display', 'flex');
    return $('.' + iframe).show();
  };

  closeVideoModal = function() {
    $('.overlay').hide();
    $('iframe').hide();
    return $(".videoIframe")[0].src = "https://www.youtube.com/embed/S49qvE86Qs0?enablejsapi=1";
  };

}).call(this);
