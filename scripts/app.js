(function() {
  var appendModal, closeVideoModal, openEventbriteModal, openVideoModal, showSubscribedAlert;

  $(document).ready(function() {
    var hash;
    hash = window.location.hash;
    if (hash === '#subscribed') {
      showSubscribedAlert();
    } else if (hash === '#trailer') {
      openVideoModal();
    }
    $('body').on('click', '.openVideoModal', openVideoModal);
    $('body').on('click', '.closeVideoModal', closeVideoModal);
    return $('body').on('click', '.openEventbriteModal', openEventbriteModal);
  });

  showSubscribedAlert = function() {
    $('.alert').show();
    return setTimout(function() {
      return $('.alert').hide();
    }, 5000);
  };

  appendModal = function(iframe, padding) {
    return $('body').append('<div class="overlay closeVideoModal"> <div class="inner-overlay modalIframe" style="position:relative; left:0; top:10px; z-index:999999;"> <div class="close-button closeVideoModal">×</div>' + iframe + '</div> </div>');
  };

  openVideoModal = function() {
    var youtubeId, youtubeIframe;
    youtubeId = 'S49qvE86Qs0';
    youtubeIframe = '<iframe class="videoIframe" width="100%" height="100%" src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen></iframe>';
    console.log('open');
    $('body').append('<div id="overlayCustom" class="closeVideoModal" style="width:100%; height:100%; position:fixed; left:0; top:0; background-color:rgba(0,0,0,0.5);"> <div class="inner-overlay videoIframe" style="position:relative; left:0; top:10px; z-index:999999;"> <div class="close-button closeVideoModal">×</div>' + youtubeIframe + '</div> </div>');
    $('.videoIframe').width($('body').outerWidth() - ($('body').outerWidth() / 4));
    $('.videoIframe').height($('.videoIframe').width() * 0.5625);
    $('.inner-overlay').css('position', 'relative');
    $('.inner-overlay').css('left', $('body').outerWidth() / 8);
    return $('.inner-overlay').css('top', $('body').outerHeight() / 2 - $('.videoIframe').height() + $('.videoIframe').height() / 2);
  };

  openEventbriteModal = function() {
    var iframe;
    iframe = '<iframe  src="//eventbrite.com/tickets-external?eid=25277609009&ref=etckt" frameborder="0" height="247" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>';
    return appendModal(iframe);
  };

  closeVideoModal = function() {
    console.log('close');
    return $('#overlayCustom').remove();
  };

}).call(this);
