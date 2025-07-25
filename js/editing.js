import data from './data';

const itemLS = 'entrance-exam-web-js-master';
const editingElements = document.querySelectorAll('.editing');

editingElements.forEach((elem) => {
  elem.setAttribute('contenteditable', 'true');
  elem.setAttribute('spellcheck', 'false');

  elem.addEventListener('blur', () => {
    const newValue = elem.textContent.trim();
    if (!newValue) return;

    elem.classList.add('animation');
    data[elem.id] = newValue;
    localStorage.setItem(itemLS, JSON.stringify(data));
  });

  elem.addEventListener('animationend', () => {
    elem.classList.remove('animation');
  });
});
