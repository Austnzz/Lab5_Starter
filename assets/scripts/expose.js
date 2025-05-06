// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // TODO

  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton   = document.querySelector('#expose button');

  hornSelect.addEventListener('change',  onHornChange);
  volumeSlider.addEventListener('input', onVolumeInput);
  playButton.addEventListener('click',   onPlayClick);
}

function onHornChange(event)
{
  const horn = event.target.value;
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');

  if (horn === 'select') return;

  hornImage.src = `assets/images/${horn}.svg`;
  hornImage.alt = `${horn} image`;

  audioElement.src = `assets/audio/${horn}.mp3`
}

function onVolumeInput(event)
{
  const value = Number(event.target.value);
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('#expose audio');

  let level = 0;
  if (value >= 67)      level = 3;
  else if (value >= 33) level = 2;
  else if (value >= 1)  level = 1;
  volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
  volumeIcon.alt = `Volume level ${level}`;

  audioElement.volume = value / 100;
}

function onPlayClick()
{
  const audioElement = document.querySelector('#expose audio');
  const hornSelect   = document.getElementById('horn-select');

  if (!audioElement.src) return;

  audioElement.play();

  if (hornSelect.value === 'party-horn') 
  {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}