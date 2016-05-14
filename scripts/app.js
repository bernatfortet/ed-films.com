(function() {
  var callPlayer, closeVideoModal, showModal, showSubscribedAlert;

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
      return callPlayer('YoutubeIframe', 'playVideo');
    });
    $('body').on('click', '.closeVideoModal', closeVideoModal);
    return callPlayer('YoutubeIframe', 'playVideo');
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
    return $('.overlay').hide();
  };

  callPlayer = function(frame_id, func, args) {
    var iframe;
    if (window.jQuery && frame_id instanceof jQuery) {
      frame_id = frame_id.get(0).id;
    }
    iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() !== 'IFRAME') {
      iframe = iframe.getElementsByTagName('iframe')[0];
    }
    if (iframe) {
      iframe.contentWindow.postMessage(JSON.stringify({
        'event': 'command',
        'func': func,
        'args': args || [],
        'id': frame_id
      }), '*');
    }
  };

}).call(this);
