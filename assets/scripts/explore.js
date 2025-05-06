window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImg = document.querySelector('#explore img');

  let voices = [];

  function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textInput.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    // change face to open mouth while speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}
