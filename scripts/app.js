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
    $('body').on('click', '#closeVideoModal', closeVideoModal);
    return $('body').on('click', '#openVideoModal', openVideoModal);
  });

  showSubscribedAlert = function() {
    return alert('Subscribed');
  };

  openVideoModal = function() {
    var youtubeId, youtubeIframe;
    youtubeId = 'S49qvE86Qs0';
    youtubeIframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen></iframe>';
    console.log('open');
    $('body').append('<div id="overlayCustom" style="width:100%; height:100%; position:fixed; left:0; top:0; background-color:rgba(0,0,0,0.5);"> <a id="close" href="#" style="width:100%; display:block; margin-top:30px; color:white; text-align:center;">CLOSE</a> <div id="inner-overlay" style="position:relative; left:0; top:10px; z-index:999999;">' + youtubeIframe + '</div> </div>');
    $('#vimeoIframe').width($('body').outerWidth() - ($('body').outerWidth() / 4));
    $('#vimeoIframe').css('position', 'relative');
    $('#vimeoIframe').css('left', $('body').outerWidth() / 8);
    return $('#vimeoIframe').height($('#vimeoIframe').width() * 0.5625);
  };

  closeVideoModal = function() {
    console.log('close');
    return $('#overlayCustom').remove();
  };

}).call(this);
