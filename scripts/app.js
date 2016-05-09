(function() {
  var closeVideoModal, openVideoModal, showSubscribedAlert;

  $(document).ready(function() {
    var hash;
    hash = window.location.hash;
    if (hash === '#subscribed') {
      showSubscribedAlert();
    } else if (hash === '#trailer') {
      openVideoModal();
    }
    $('body').on('click', '.openVideoModal', openVideoModal);
    return $('body').on('click', '.closeVideoModal', closeVideoModal);
  });

  showSubscribedAlert = function() {
    return alert('Subscribed');
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
    return $('.inner-overlay').css('top', $('body').outerHeight() / 16);
  };

  closeVideoModal = function() {
    console.log('close');
    return $('#overlayCustom').remove();
  };

}).call(this);
