$(document).ready(function() {

    var playPromise = $('#bg-vid').get(0).play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (playPromise !== undefined) {
        playPromise.then(function() {
            $('#bg-vid').fadeIn('fast');
        });
    }

    // if video doesn't play in .5 seconds, show static bg
    setTimeout(function(){
        $('#hero').removeClass('loading') 
    }, 500);

    $('.ga-track').mousedown(function(event) {
        var target = $(event.currentTarget);
        var label = target.data('ga-label');
        var ga = gtag('event', 'click', {
            'event_label': label
        });
        console.log('GA Click Event: ' + label);
    })

    // remove hash from URL after click
    $('#about-btn').click(function(e){
        setTimeout(function(){
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 1)
    })

    var quack = document.getElementById("quack");
    $(".footer-duck").click(function() {
        quack.play();
    })

});