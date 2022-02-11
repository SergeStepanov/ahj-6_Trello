import closeAddCard from './closeAddCard';
import cardDnD from './cardDnD';
import { updateStorage } from './localStorage';

export default function cardControl() {
  const container = document.querySelector('.container');

  container.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.matches('.add-card')) {
      const addContainer = document.createElement('div');
      addContainer.classList.add('add-container');

      const inputTextCard = document.createElement('textarea');
      inputTextCard.classList.add('input-text');
      inputTextCard.placeholder = 'Enter a title for this card...';
      addContainer.appendChild(inputTextCard);

      const addBtn = document.createElement('button');
      addBtn.classList.add('add-btn');
      addBtn.textContent = 'Add Card';
      addContainer.appendChild(addBtn);

      const closeBtn = document.createElement('span');
      closeBtn.classList.add('close');
      closeBtn.textContent = '\u2716';
      addContainer.appendChild(closeBtn);
      event.target.closest('div').appendChild(addContainer);
      event.target.classList.add('hidden');

      inputTextCard.focus();
    }

    if (event.target.matches('.close')) {
      closeAddCard(event);
    }

    if (event.target.matches('.add-btn')) {
      // console.log(event.target);
      const columnUl = event.target.closest('.column').children[1];
      const inputText = event.target
        .closest('.add-container')
        .querySelector('.input-text');

      const li = document.createElement('li');
      li.classList.add('card');
      li.textContent = inputText.value;

      const delCard = document.createElement('span');
      delCard.classList.add('delete-card');
      delCard.textContent = '\u2716';
      li.insertAdjacentElement('afterbegin', delCard);

      columnUl.appendChild(li);

      closeAddCard(event);
    }

    if (event.target.matches('.delete-card')) {
      const delEl = event.target.closest('.card');
      delEl.remove();
    }

    if (event.target.matches('.card')) {
      cardDnD();
    }

    updateStorage();
  });
}
