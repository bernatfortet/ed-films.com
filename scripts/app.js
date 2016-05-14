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
      return $('.videoIframe').tube();
    });
    $('body').on('click', '.closeVideoModal', closeVideoModal);
    return $('.videoIframe').player({
      video: 'S49qvE86Qs0',
      width: '100%',
      height: '100%'
    });

    /*
    player = new (YT.Player)($('.videoIframe')[0],
      height: '100%'
      width: '100%'
      videoId: 'S49qvE86Qs0'
      events:
        'onReady': ->
          console.log 'onRead'
        'onStateChange': ->
          console.log 'on state change'
          )
     */
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
    return $('iframe').hide();
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
