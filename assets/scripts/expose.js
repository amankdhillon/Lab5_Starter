// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // get element references
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // imag and audio on hirn selection
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;

    // set image and audio based on selectrd
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn.replace('-', ' ') + ' image';
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // vol change handler
  volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value);
    
    // icon updaye
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }

    //scale 0–1
    hornAudio.volume = volume / 100;
  });

  // play sound
  playButton.addEventListener('click', () => {
    hornAudio.play();
    
    // trigger confetti if party horn
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
