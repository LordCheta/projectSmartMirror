const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const fs = require('fs');

const AudioRecorder = require('node-audiorecorder');
 
const { IamAuthenticator} = require('ibm-watson/auth')

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

// CONFIGURING THE RECORDING
// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
  program: `sox`,     // Which program to use, either `arecord`, `rec`, or `sox`.
  device: null,       // Recording device to use.
  
  bits: 16,           // Sample size. (only for `rec` and `sox`)
  channels: 1,        // Channel count.
  encoding: `signed-integer`,  // Encoding type. (only for `rec` and `sox`)
  format: `S16_LE`,   // Encoding type. (only for `arecord`)
  rate: 16000,        // Sample rate.
  type: `wav`,        // Format type.
  
  // Following options only available when using `rec` or `sox`.
  silence: 3,         // Duration of silence in seconds before it stops recording.
  thresholdStart: 0.5,  // Silence threshold to start recording.
  thresholdStop: 0.5,   // Silence threshold to stop recording.
  keepSilence: true   // Keep the silence in the recording.
};
// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;
 
// Create an instance.
let audioRecorder = new AudioRecorder(options, logger);

//create timeout (so after 10 seconds it stops feel free to remove this)
// setTimeout(function() {
//   audioRecorder.stop();
// }, 10000);

// This line is for saving the file locally as well (Strongly encouraged for testing)
const fileStream = fs.createWriteStream("test.wav", { encoding: 'binary' });

// Start stream to Watson STT Remove .pipe(process.stdout) if you dont want translation printed to console
audioRecorder.start().stream().pipe(recognizeStream).pipe(process.stdout);

//Create another stream to save locally
audioRecorder.stream().pipe(fileStream);

//Finally pipe translation to transcription file
recognizeStream.pipe(fs.createWriteStream('./transcription.txt'));