import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css'

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
       <div className='container'>
        <div className='heading'><p id='speech'>Speech To Text Convertor</p></div>
      <p id='microphone'>Current Status - Microphone: {listening ? 'on' : 'off'}</p>
       <div className='text-area'><p>{transcript}</p></div>
       <div className='btns'> 
        <button id='start' onClick={startListening}>Start</button>
      <button id='stop' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      </div>
      
      </div>
    </>
  );
};
export default App;