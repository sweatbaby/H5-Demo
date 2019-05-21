let $music_box = $('.music_box');
let $audio = $('audio');
// console.log($music_box,$audio)
let isRunning = true;
$music_box.on('click',function() {
    if(isRunning) {
        $(this).css({
            animationPlayState: 'paused',
        });
        $audio[0].pause();
        isRunning = false;
    } else {
        $(this).css({
            animationPlayState: 'running',
        });
        $audio[0].play();
        isRunning = true;
    }
})