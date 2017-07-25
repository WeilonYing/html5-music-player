
console.log(musiclocation);

var player = document.getElementById("play");
var index = 0;

if (self.songs.length > 0) {
	player.preload = "auto";
	player.playbackRate = 1.0;
	playSong(self.songs[self.index]);
	
	var timer = setInterval(switchSong, 1000);
}

function switchSong() {
	if (self.player.ended && self.index < self.songs.length - 1) {
		playSong(self.songs[++index]);
	}
}

function playSong(songName) {
	self.player.src = self.musiclocation + songName;
	player.play();
	document.getElementById("now-playing").innerText = songName;
}

function nextSong() {
	if (self.index < self.songs.length - 1) {
		playSong(self.songs[++index]);
	}
}

function prevSong() {
	if (self.index > 0) {
		playSong(self.songs[--index]);
	}
}

function shuffleSongs() {
	if (self.songs.length > 0) {
		self.index = 0
		for (let i = 0; i < self.songs.length; i++) {
			let newInd = Math.floor(Math.random() * i);
			// swap
			let temp = self.songs[i];
			self.songs[i] = self.songs[newInd];
			self.songs[newInd] = temp;
		}
		playSong(self.songs[self.index]);
	}
	
}

