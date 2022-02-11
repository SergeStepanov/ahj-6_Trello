/* eslint-disable no-useless-return */

// const toDo = document.querySelector('[data-id=Todo]');
// const inProgress = document.querySelector('[data-id=in-progress]');
// const doNe = document.querySelector('[data-id=doNe]');

export default function storage() {
  // if (localStorage.length === 0) return;
  console.log(localStorage);

  // updateStorage();

  // console.log(toDo, inProgress, doNe);
}

export function updateStorage() {
  const toDo = document.querySelector('[data-id=Todo]');
  const inProgress = document.querySelector('[data-id=in-progress]');
  const doNe = document.querySelector('[data-id=doNe]');

  const toDoData = [];
  // if (toDo === null) return;
  for (const element of toDo.querySelectorAll('.card')) {
    toDoData.push(element.textContent.slice(1));
  }
  localStorage.toDo = JSON.stringify(toDoData);

  const inProgressData = [];
  // if (inProgress === null) return;
  for (const element of inProgress.querySelectorAll('.card')) {
    inProgressData.push(element.textContent.slice(1));
  }
  localStorage.inProgress = JSON.stringify(inProgressData);

  const doNeData = [];
  // if (doNe === null) return;
  for (const element of doNe.querySelectorAll('.card')) {
    doNeData.push(element.textContent.slice(1));
  }
  localStorage.doNe = JSON.stringify(doNeData);
}

export function loadStorage() {
  if (localStorage.length === 0) return;

  const toDo = document.querySelector('[data-id=Todo]');
  const inProgress = document.querySelector('[data-id=in-progress]');
  const doNe = document.querySelector('[data-id=doNe]');

  const columnToDo = JSON.parse(localStorage.toDo);
  const columnInProgress = JSON.parse(localStorage.inProgress);
  const columnDoNe = JSON.parse(localStorage.doNe);

  for (let index = 0; index < columnToDo.length; index += 1) {
    const element = columnToDo[index];

    const li = document.createElement('li');
    li.classList.add('card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('delete-card');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    toDo.appendChild(li);
  }

  for (let index = 0; index < columnInProgress.length; index += 1) {
    const element = columnInProgress[index];

    const li = document.createElement('li');
    li.classList.add('card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('delete-card');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    inProgress.appendChild(li);
  }

  for (let index = 0; index < columnDoNe.length; index += 1) {
    const element = columnDoNe[index];

    const li = document.createElement('li');
    li.classList.add('card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('delete-card');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    doNe.appendChild(li);
  }
}
