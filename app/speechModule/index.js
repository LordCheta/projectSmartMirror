const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const fs = require('fs');

const portAudio = require('naudiodon');
 
const { IamAuthenticator} = require('ibm-watson/auth')
const lame = require('lame')

const SpeechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'FcI24mysh9irOwwAbksMs_5EgPVfb7ohxeYtlGMCqi0Q',
  }),
  url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api'
})

let recognizeStream = SpeechToText.recognizeUsingWebSocket({
  contentType: 'audio/wav',
  interimResults: true
})

// Create an instance of AudioIO with inOptions, which will return a ReadableStream
var ai = new portAudio.AudioIO({
  inOptions: {
    channelCount: 2,
    sampleFormat: portAudio.SampleFormat16Bit,
    sampleRate: 22100,
    deviceId: -1 // Use -1 or omit the deviceId to select the default device
  }
});
 
// create the Encoder instance
var encoder = new lame.Encoder({
  // input
  channels: 2,        // 2 channels (left and right)
  bitDepth: 16,       // 16-bit samples
  sampleRate: 44100,  // 44,100 Hz sample rate
 
  // output
  bitRate: 128,
  outSampleRate: 22050,
  mode: lame.STEREO // STEREO (default), JOINTSTEREO, DUALCHANNEL or MONO
});

var ws = fs.createWriteStream('rawAudio.mp3');

ai.on('error', err => console.error);

process.stdin.pipe(encoder);

ai.pipe(encoder);
ai.start() //.stream().pipe(recognizeStream).pipe(process.stdout);;

encoder.pipe(ws);
encoder.pipe(process.stdout)

process.on('SIGINT', () => {
  console.log('Received SIGINT. Stopping recording.');
  ai.quit();
});

// const fileStream = fs.createWriteStream("test.wav", { encoding: 'binary' });

// Start stream to Watson STT Remove .pipe(process.stdout) if you dont want translation printed to console
// audioRecorder.start().stream().pipe(recognizeStream).pipe(process.stdout);

//Create another stream to save locally
//audioRecorder.stream().pipe(fileStream);

//Finally pipe translation to transcription file
// recognizeStream.pipe(fs.createWriteStream('./transcription.txt'));