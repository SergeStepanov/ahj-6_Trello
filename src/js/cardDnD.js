/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
import { updateStorage } from './localStorage';

export default function cardDnD() {
  let draggedItem = null;
  let selectedItem = null;
  let startX = 0;
  let startY = 0;

  document.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const target = e.target.closest('.card');
    if (!target) {
      return;
    }

    selectedItem = target;
    selectedItem.classList.add('selected');

    draggedItem = target.cloneNode(true);
    draggedItem.classList.add('dragged');

    const width = selectedItem.clientWidth;
    const height = selectedItem.clientHeight;
    const rect = selectedItem.getBoundingClientRect();
    const { scrollLeft, scrollTop } = document.body;
    const left = rect.left + scrollLeft;
    const top = rect.top + scrollTop;
    startX = e.clientX;
    startY = e.clientY;

    draggedItem.style.width = `${width}px`;
    draggedItem.style.height = `${height}px`;
    draggedItem.style.top = `${top}px`;
    draggedItem.style.left = `${left}px`;

    document.body.appendChild(draggedItem);
  });

  document.addEventListener('mousemove', (e) => {
    e.preventDefault();

    if (!draggedItem) {
      return;
    }

    const width = selectedItem.clientWidth;
    const height = selectedItem.clientHeight;
    // const rect = selectedItem.getBoundingClientRect();
    // const { scrollLeft, scrollTop } = document.body;
    // const left = rect.left + scrollLeft + e.clientX - startX;
    // let top = rect.top + scrollTop + e.clientY - startY;

    // draggedItem.style.width = `${width}px`;
    // draggedItem.style.height = `${height}px`;

    const closest = document.elementFromPoint(e.clientX, e.clientY);
    const { top } = closest.getBoundingClientRect();

    draggedItem.style.top = `${e.pageY - height / 2}px`;
    draggedItem.style.left = `${e.pageX - width / 2}px`;

    if (closest.classList.contains('card')) {
      if (e.pageY > window.scrollY + top + closest.offsetHeight / 2) {
        closest
          .closest('.column-cards')
          .insertBefore(selectedItem, closest.nextElementSibling);
      } else {
        closest.closest('.column-cards').insertBefore(selectedItem, closest);
      }
    } else if (
      closest.classList.contains('column-cards')
      && !closest.querySelector('.card')
    ) {
      closest.append(selectedItem);
    }
  });

  document.addEventListener('mouseup', (e) => {
    e.preventDefault();

    if (!selectedItem) {
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    draggedItem.style.display = 'none';
    const changingItem = document.elementFromPoint(x, y);
    const parent = changingItem.closest('.column-cards');

    if (changingItem && parent) {
      parent.insertBefore(selectedItem, changingItem);
    }

    updateStorage();

    selectedItem.classList.remove('selected');

    selectedItem = null;

    draggedItem.remove();
    draggedItem = null;
  });
}
