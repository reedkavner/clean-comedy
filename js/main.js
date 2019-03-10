    //load the YT IFrame Player API code asynchronously
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //create YT player
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: '26-nLZZGupU',
            playerVars: { 'rel': 0, 'modestbranding': 1, 'playsinline' : 1},
            events: { 'onStateChange': onPlayerStateChange }
        });
    }

    //open lightbox and play video
    $('#play').click(function() {
        $('.lightbox').show();
        player.playVideo();
        $('body').addClass('overflow-hidden');
    });

    // close the lightbox if the user clicks on anything except the open button or yt player
    $(document).click(function(event) {
        if (!$(event.target).closest(".embed-responsive, #play").length) {
            player.stopVideo();
            $('.lightbox').hide();
        }
    });

    //close lightbox when video finishes
    function onPlayerStateChange(event) {
        if (event.data === 0) {
            $('body').removeClass('overflow-hidden');
            $('.lightbox').hide();
        }
    }

    var quack = document.getElementById("quack");
    $(".footer-duck").click(function() {
        quack.play();
    })