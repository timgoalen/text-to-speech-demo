function initSpeechSynthesis() {
  // -- DOM ELEMENTS --
  
  const synth = window.speechSynthesis;
  const speakBtn = document.getElementById("speak-btn");
  const clearBtn = document.getElementById("clear-btn");
  const textArea = document.getElementById("text-area");

  // -- FUNCTIONS --

  function speakText() {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    // Return if synth is already speaking, or the text area is empty.
    if (synth.speaking || !textArea.value) {
      return;
    }
    synth.speak(utterance);
  }

  function clearTextArea() {
    textArea.value = "";
    textArea.focus();
  }

  // -- EVENT LISTENERS --

  speakBtn.addEventListener("click", speakText);
  clearBtn.addEventListener("click", clearTextArea);
}

document.addEventListener("DOMContentLoaded", initSpeechSynthesis);
