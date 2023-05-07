
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttleMeth = throttle((seconds) => {
    console.log(seconds)
    saveValue(seconds);
}, 1000)

player.on('timeupdate', ({ seconds }) => {
    throttleMeth(seconds)  
});

function saveValue(value) {
    localStorage.setItem(storageKey, value)
};

function checkStoredTime() {
    const currTime = localStorage.getItem(saveValue);

    if (currTime) {
        player.setCurrentTime(currTime)
    }
};

checkStoredTime();
