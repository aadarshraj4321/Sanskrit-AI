import React, { useState } from 'react';

const SanskritAlphabetLearning = () => {
  const [audio, setAudio] = useState(null);

  const playAudio = (audioUrl) => {
    const audioElement = new Audio(audioUrl);
    setAudio(audioElement);
    audioElement.play();
  };

  const renderVowel = (vowel, index) => (
    <div key={index} className="alphabet-item space-y-4 p-4 border-b border-gray-300">
      <h3 className="text-2xl font-semibold">{vowel.symbol} - {vowel.name}</h3>
      <img src={vowel.image} alt={vowel.name} className="w-32 h-32 object-cover mx-auto" />
      <button
        onClick={() => playAudio(vowel.audio)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Play Pronunciation
      </button>
      <p className="text-lg text-gray-700">{vowel.pronunciation}</p>
      <div className="example mt-4">
        <h4 className="text-xl font-semibold">Example:</h4>
        <p className="text-lg">{vowel.example.word} ({vowel.example.meaning})</p>
        <button
          onClick={() => playAudio(vowel.example.audio)}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Play Example
        </button>
      </div>
    </div>
  );

  const renderConsonant = (consonant, index) => (
    <div key={index} className="alphabet-item space-y-4 p-4 border-b border-gray-300">
      <h3 className="text-2xl font-semibold">{consonant.symbol} - {consonant.name}</h3>
      <img src={consonant.image} alt={consonant.name} className="w-32 h-32 object-cover mx-auto" />
      <button
        onClick={() => playAudio(consonant.audio)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Play Pronunciation
      </button>
      <p className="text-lg text-gray-700">{consonant.pronunciation}</p>
      <div className="example mt-4">
        <h4 className="text-xl font-semibold">Example:</h4>
        <p className="text-lg">{consonant.example.word} ({consonant.example.meaning})</p>
        <button
          onClick={() => playAudio(consonant.example.audio)}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Play Example
        </button>
      </div>
    </div>
  );

  return (
    <div className="learning-page max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-3xl font-bold text-center">{lessonData.title}</h1>
      <p className="text-xl text-gray-800 text-center">{lessonData.description}</p>
      
      <div className="section space-y-6">
        <h2 className="text-2xl font-semibold">Vowels</h2>
        <div className="alphabet-list space-y-4">
          {lessonData.interactive_content.vowels.map(renderVowel)}
        </div>
      </div>

      <div className="section space-y-6">
        <h2 className="text-2xl font-semibold">Consonants</h2>
        <div className="alphabet-list space-y-4">
          {lessonData.interactive_content.consonants.map(renderConsonant)}
        </div>
      </div>

      {audio && (
        <div className="audio-player mt-6 p-4 bg-gray-100 rounded-md">
          <p className="text-lg font-semibold text-center">Now playing: {audio.src}</p>
        </div>
      )}
    </div>
  );
};

export default SanskritAlphabetLearning;
