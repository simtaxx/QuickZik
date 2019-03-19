const main = document.querySelector("main")
class song {
  constructor(name, picture, link) {
    this.name = name
    this.picture = picture
    this.link = link
    this.song = function play_song() {
      main.innerHTML = `<ul><li><img src="${this.picture}" alt="${this.picture}"</li>
      <audio controls autoplay>
      <source src="${this.link}" type="audio/mp3" />
      </audio>
      <form>
      Enter the name of this song:<br>
      <input type="text" name="songName"><br>
      <input type="submit">
      </form></ul>
      <h2>votre score: ${score}</h2>`
    }
  }
}
let score = 0;
let racks = new song('racks on racks', 'contents/pictures/lilpump.jpg', 'contents/song/racks.mp3')
let bebe = new song('bebe', 'contents/pictures/mhd.jpg', 'contents/song/bebe.mp3')
let humble = new song('humble', 'contents/pictures/lamar.jpg', 'contents/song/humble.mp3')
let madrina = new song('madrina', 'contents/pictures/maes.png', 'contents/song/madrina.mp3')
let sickomode = new song('sicko mode', 'contents/pictures/travis.jpg', 'contents/song/sickomode.mp3')
let songs = [
  racks,
  bebe,
  humble,
  madrina,
  sickomode
]
console.log(songs)


function show(){
  for (let i = 0; i < songs.length; i++) {
    let currentSong = songs[Math.floor(Math.random() * 5)]
    currentSong.song()
    document.addEventListener('keypress', function() {
      if (document.querySelector('input').value === currentSong.name){
        score++
        console.log(songs)
        show()
      }
    })
  }
}
show()