import { useState } from 'react';

export default function Speech() {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    const utter = new SpeechSynthesisUtterance(text || "Hello, World!");
    speechSynthesis.speak(utter);
  };

  const handleListen = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (e) => {
      setText(e.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div>
      <button onClick={handleListen}>🎤 Start Listening</button>
      <button onClick={handleSpeak}>🗣 Speak</button>
      <p>{text}</p>
    </div>
  );
}
