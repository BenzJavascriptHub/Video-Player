const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// 點擊播放或暫停
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// 點擊video 播放暫停Icon更新
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// 點擊video更新進度條和時間戳
function updateProgress() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    // 獲取分鐘數
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins);
    }

    // 獲取秒數
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + String(seconds);
    }

    timestamp.innerHTML = `${mins}:${seconds}`
}

// 停止video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// 拖動進度條的時候改變播放內容和時間進度
function setVideoProgress() {
    video.currentTime = +progress.value * video.duration / 100;
}

// 添加事件監聽
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);