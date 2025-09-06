import React, { useState } from "react";

const dictionary = {
  hello: {
    spanish: "hola",
    hindi: "नमस्ते",
    kannada: "ನಮಸ್ಕಾರ",
    telugu: "హలో",
  },
  how: {
    spanish: "cómo",
    hindi: "कैसे",
    kannada: "ಹೇಗೆ",
    telugu: "ఎలా",
  },
  are: {
    spanish: "estas",
    hindi: "हो",
    kannada: "ಇದ್ದೀಯ",
    telugu: "ఉన్నావు",
  },
  you: {
    spanish: "tú",
    hindi: "तुम",
    kannada: "ನೀವು",
    telugu: "నీవు",
  },
};

function Translate() {
  const [input, setInput] = useState("");
  const [translations, setTranslations] = useState({});

  const handleTranslate = () => {
    const words = input.toLowerCase().split(" ");
    let spanish = "";
    let hindi = "";
    let kannada = "";
    let telugu = "";

    words.forEach((word) => {
      if (dictionary[word]) {
        spanish += dictionary[word].spanish + " ";
        hindi += dictionary[word].hindi + " ";
        kannada += dictionary[word].kannada + " ";
        telugu += dictionary[word].telugu + " ";
      } else {
        spanish += word + " ";
        hindi += word + " ";
        kannada += word + " ";
        telugu += word + " ";
      }
    });

    setTranslations({ spanish, hindi, kannada, telugu });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Offline Translator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter English sentence"
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={handleTranslate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Translate
      </button>

      {translations.spanish && (
        <div style={{ marginTop: "30px" }}>
          <h3>Spanish: {translations.spanish}</h3>
          <h3>Hindi: {translations.hindi}</h3>
          <h3>Kannada: {translations.kannada}</h3>
          <h3>Telugu: {translations.telugu}</h3>
        </div>
      )}
    </div>
  );
}

export default Translate;
