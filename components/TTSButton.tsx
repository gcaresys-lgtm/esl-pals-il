"use client";

export default function TTSButton({ word }: { word: string }) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      title={`השמע: ${word}`}
      className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition hover:bg-blue-200"
    >
      🔊
    </button>
  );
}
