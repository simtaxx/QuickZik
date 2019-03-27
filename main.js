const main = document.querySelector("main");

// This thing will put the content in the html

class song {
  constructor(name, picture, link) {
    this.name = name;
    this.picture = picture;
    this.link = link;
    this.song = function play_game() {
      main.innerHTML = `<ul class="invisible"><li><img src="${
        this.picture
      }" alt="${this.picture}"</li>
      <audio controls autoplay>
      <source src="${this.link}" type="audio/mp3" />
      </audio>
      <form>
      Enter the name of this song:<br>
      <input type="text" name="songName">
      </form></ul>
      <h3 class="invisible">votre score: ${score}</h2>
      <h3 class="invisible" id='time'>temps restant: ${temps}</h2>`;
    };
  }
}

let score = 0;
let temps = 20;

// Somes objects

let racks = new song(
  "racks on racks",
  "contents/pictures/lilpump.jpg",
  "contents/song/racks.mp3"
);
let bebe = new song(
  "bebe",
  "contents/pictures/mhd.jpg",
  "contents/song/bebe.mp3"
);
let humble = new song(
  "humble",
  "contents/pictures/lamar.jpg",
  "contents/song/humble.mp3"
);
let madrina = new song(
  "madrina",
  "contents/pictures/maes.png",
  "contents/song/madrina.mp3"
);
let sickomode = new song(
  "sicko mode",
  "contents/pictures/travis.jpg",
  "contents/song/sickomode.mp3"
);

// "songs" it used for select an random song in the array

let songs = [racks, bebe, humble, madrina, sickomode];
console.log(songs);

// This function will show or hide somes elements

function selector(first, second, third, four) {
  document.querySelector(`${first}`).classList.add("invisible");
  document.querySelector(`${second}`).classList.remove("invisible");
  document.querySelector(`${third}`).classList.remove("invisible");
  document.querySelector(`${four}`).classList.remove("invisible");
}

// This function will show the song who its playing at the moment

function show() {
  for (let i = 0; i < songs.length; i++) {
    let currentSong = songs[Math.floor(Math.random() * 5)]; // Select a random music
    currentSong.song(); // Put the current song in the html
    document.addEventListener("keyup", function(e) {
      if (document.querySelector("input").value === currentSong.name) {
        score++;
        show();
        selector("h2", "ul", "h3", `#time`);
      }
    });
  }
}

let countEnter = 0;

document.querySelector("html").addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    if (countEnter === 0) {
      console.log("ouai");
      countEnter++;
      show();
      selector("h2", "ul", "h3", `#time`);
      if (temps > 0) {
        let timer = setInterval(function() {
          if (temps > 0) {
            temps--;
            document.querySelector(
              "#time"
            ).innerText = `temps restant: ${temps}`;
            if (temps === 0) {
              console.log(temps);
            }
          }
        }, 1000);
      }
    }
  }
});
