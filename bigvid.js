// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '26-nLZZGupU',
        playerVars: { 'rel': 0, 'controls': 1 },
        events: { onStateChange: onPlayerStateChange }
    });
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
        $('#hero').show();
        $('#yt-trailer').hide();
    }
}


$('#play').click(function() {
    $('#hero').hide();
    $('#yt-trailer').show();
    player.playVideo();
});