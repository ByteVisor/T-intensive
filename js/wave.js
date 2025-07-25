document.addEventListener('click', (e) => {
  const wave = document.createElement('div');
  wave.classList.add('wave', 'wave-active');

  const size = 5;
  wave.style.width = `${size}px`;
  wave.style.height = `${size}px`;
  wave.style.left = `${e.pageX - size / 2}px`; // учитывает прокрутку
  wave.style.top = `${e.pageY - size / 2}px`; // учитывает прокрутку
  wave.style.setProperty('background-color', 'red', 'important');

  document.body.appendChild(wave);

  wave.addEventListener('animationend', () => {
    wave.remove();
  });
});
