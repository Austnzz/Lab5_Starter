// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // TODO

  const faceImg       = document.querySelector('#explore img');
  const textInput     = document.getElementById('text-to-speak');
  const voiceSelect   = document.getElementById('voice-select');
  const talkButton    = document.querySelector('#explore button');

  function populateVoices()
  {
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    speechSynthesis.getVoices().forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  talkButton.addEventListener('click', () => {
    const phrase = textInput.value.trim();
    if (!phrase) return;                               
    if (voiceSelect.value === 'select') return;

    const utter = new SpeechSynthesisUtterance(phrase);
    utter.voice = speechSynthesis.getVoices()[voiceSelect.value];

    utter.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });
    utter.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utter);
  });
}