

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    videoId: 'JGW4Ec2Hyhc',
    playerVars: {
        autoplay: true,
        // loop: true,
        playelist: 'JGW4Ec2Hyhc',
        rel: 0,
        modestbranding: 1,
    },
    events: {
        onReady: function (event) {
            event.target.mute()
        }
    }
});
}
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

let btnEl = document.querySelector('.btn');

btnEl.addEventListener('mousedown', function () {
    document.querySelector('.are').style.transform = 'scale(0.8)';
})
btnEl.addEventListener('mouseup', function () {
    document.querySelector('.are').style.transform = 'none';
})