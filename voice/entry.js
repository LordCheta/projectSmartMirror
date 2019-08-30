// This is the voice recognition entry from home. We access other apps from here.
// since it's electron means chrome only

// have a voice button that one clicks when they want to turn on speech recogntion on home
const mic = document.querySelector('#mic');
const alert = document.querySelector('#micAlert');
let recognition = new webkitSpeechRecognition();

// end recognition when user stops speaking
recognition.continuous = false;

// show intermediate processing
recognition.interimResults = false;

const start = () => {
  recognition.start();

  recognition.onresult = function(event){
    console.log(event)
  }
}

// when a word is recognized, perform action and then start recognition again
// recognition.onend = () => {
//   recognition.start();
// }
mic.addEventListener("click", ()=> {
  if (mic.className == '') {
    mic.className = "started";  
    start();
    micAlert.innerText = 'Speech Recognition started. Click Mic again to stop';
    micAlert.style.display = 'block';
    setTimeout(()=> micAlert.style.display = 'none', 5000)
  } else {
    recognition.abort();
    mic.className = '';
    micAlert.innerText = 'Speech Recognition stopped. Click Mic again to start';
    micAlert.style.display = 'block';
    setTimeout(()=> micAlert.style.display = 'none', 5000)
  }
}); //add click event to mic
// add a property to mic to indicate when recognition is on or off