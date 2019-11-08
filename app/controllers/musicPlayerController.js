const dom = require('../views/base') // Object containing all DOM queries

// Array of auido files stored in devAssets/music folder
let audioFile = [
    "Barlow Girl - Lift Up Your Eyes",
    "Hillsong - You are God",
    "Rap",
    "kutless",
    "Blues"
]

// keeps track of current song being played
let songCount = 0

let loadSong = currentCount => {
    let sourceTemplate =  `<source src="../devAssets/music/${audioFile[currentCount]}.mp3">`
    let songDetailsTemplate = `<p id="songTitle">${audioFile[currentCount]}</p>`
    
    dom.songDetails.innerHTML= ''
    dom.audio.innerHTML= ''

    dom.songDetails.insertAdjacentHTML('afterbegin', songDetailsTemplate)
    dom.audio.insertAdjacentHTML('afterbegin', sourceTemplate)
}

let nextSong = () => {
    if(songCount >= 5) {
        return songCount = 0
    }
    return songCount++
}

let previousSong = () => {
    if(songCount < 0) {
        return songCount = 0
        
    }
    return songCount--
}

window.onload = () => {
    loadSong(songCount)

    // eventListerners
    dom.previousSong.addEventListener('click', () => {
       loadSong(previousSong())
    })

    dom.nextSong.addEventListener('click', () => {
        loadSong(nextSong())
    })
} 