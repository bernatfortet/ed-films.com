(function() {
  var closeVideoModal, openTicketsModal, openVideoModal, showModal, showSubscribedAlert;

  $(document).ready(function() {
    var hash;
    hash = window.location.hash;
    if (hash === '#subscribed') {
      showSubscribedAlert();
    } else if (hash === '#trailer') {
      openVideoModal();
    } else if (hash === '#tickets') {
      openTicketsModal();
    }
    $('body').on('click', '.openEventbriteModal', openTicketsModal);
    $('body').on('click', '.openVideoModal', openVideoModal);
    return $('body').on('click', '.closeVideoModal', closeVideoModal);
  });

  showSubscribedAlert = function() {
    $('.alert').show();
    return setTimeout(function() {
      return $('.alert').hide();
    }, 4000);
  };

  showModal = function(iframe) {
    $('.overlay').css('display', 'flex');
    return $('.' + iframe).show();
  };

  openTicketsModal = function() {
    return showModal('eventbriteIframe');
  };

  openVideoModal = function() {
    showModal('videoIframe');
    $('.videoIframe').height($('.videoIframe').width() * 0.5625);
    return $(".videoIframe")[0].src += "&autoplay=1";
  };

  closeVideoModal = function() {
    $('.overlay').hide();
    $('iframe').hide();
    return $(".videoIframe")[0].src = "https://www.youtube.com/embed/S49qvE86Qs0?enablejsapi=1";
  };

}).call(this);
