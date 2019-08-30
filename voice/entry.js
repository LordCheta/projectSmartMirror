// This is the voice recognition entry from home. We access other apps from here.
// since it's electron means chrome only

// have a voice button that one clicks when they want to turn on speech recogntion on home
// const mic = document.querySelector('#microphone');
let recognition = new webkitSpeechRecognition();
// end recognition when user stops speaking
recognition.continuous = false;
// show intermediate processing
recognition.interimResults = false;

recognition.onresult = function(event){
  console.log(event)
}

recognition.start();

mic.addEventListener("click", ()=> start()); //add click event to mic
// when a word is recognized, perform action and then start recognition again
recognition.onend = () => {
  recognition.start();
}