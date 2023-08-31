var $video = document.getElementById('videoplayerhtml');

$(window).scroll(function() {
    var speed = 400;
    var scroll = $(this).scrollTop() / speed;
    $video.currentTime = scroll;
});
