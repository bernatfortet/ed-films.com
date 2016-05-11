$(document).ready( ->
	
  hash = window.location.hash
  if hash == '#subscribed'
    showSubscribedAlert()
  else if hash == '#trailer'
    openVideoModal()


  $('body').on('click', '.openVideoModal', openVideoModal )
  $('body').on('click', '.closeVideoModal', closeVideoModal )

  $(".desc").dotdotdot()
)
	

showSubscribedAlert = ->
  alert('Subscribed')


openVideoModal = ->

  youtubeId = 'S49qvE86Qs0'
  youtubeIframe = '<iframe class="videoIframe" width="100%" height="100%" src="https://www.youtube.com/embed/'+youtubeId+'" frameborder="0" allowfullscreen></iframe>'


  console.log 'open'
  $('body').append '
    <div id="overlayCustom" class="closeVideoModal" style="width:100%; height:100%; position:fixed; left:0; top:0; background-color:rgba(0,0,0,0.5);">
      
      <div class="inner-overlay videoIframe" style="position:relative; left:0; top:10px; z-index:999999;">
        <div class="close-button closeVideoModal">×</div>
        '+youtubeIframe+'
      </div>
    </div>'

  $('.videoIframe').width $('body').outerWidth() - ($('body').outerWidth() / 4)
  $('.videoIframe').height $('.videoIframe').width() * 0.5625
  $('.inner-overlay').css 'position', 'relative'
  $('.inner-overlay').css 'left', $('body').outerWidth() / 8
  $('.inner-overlay').css 'top', $('body').outerHeight()/2 - $('.videoIframe').height() + $('.videoIframe').height()/2


closeVideoModal = ->
  console.log 'close'
  $('#overlayCustom').remove();



#<iframe id="vimeoIframe" src="https://player.vimeo.com/video/122502930" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:100%; height:70%;"></iframe>