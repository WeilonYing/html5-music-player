
console.log(musiclocation);

var player = document.getElementById("play");
var index = 0;
var songQueue = [];
var timerStarted = false;

//Initialise song queue
if (self.files != null) {
    initSongQueue();
    player.preload = "auto";
    player.playbackRate = 1.0;
}

function initSongQueue() {
    self.addAllSongs(musiclocation, self.files.children);
    if (self.songQueue.length > 0) {
        self.setSong(self.songQueue[index++]);
    }
}

function addAllSongs(parentdir, directory) {
    for (var key in directory) {
        console.log(key);
        let object = directory[key];
        if (object.type == "file") {
            this.songQueue.push(parentdir + "/" + object.name);
        }
        if (object.type == "directory") {
            this.addAllSongs(parentdir + "/" + object.name, object.children);
        }
    }
}

function switchSong() {
    if (self.player.ended && self.index < self.songQueue.length - 1) {
        setSong(self.songQueue[++index]);
        self.player.play();
    }
}

function setSong(songName) {
    self.player.src = songName;
    document.getElementById("now-playing").innerText = songName;

    if (!this.timerStarted) {
        var timer = setInterval(switchSong, 1000);
    }
}

function nextSong() {
    if (self.index < self.songQueue.length - 1) {
        setSong(self.songQueue[++index]);
        self.player.play();
    }
}

function prevSong() {
    if (self.index > 0) {
        setSong(self.songQueue[--index]);
        self.player.play();
    }
}

function shuffleSongs() {
    if (self.songQueue.length > 0) {
        self.index = 0
        for (let i = 0; i < self.songQueue.length; i++) {
            let newInd = Math.floor(Math.random() * i);
            // swap
            let temp = self.songQueue[i];
            self.songQueue[i] = self.songQueue[newInd];
            self.songQueue[newInd] = temp;
        }
        setSong(self.songQueue[self.index]);
    }

}
