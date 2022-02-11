export default function closeAddCard(event) {
  const addContainer = document.querySelector('.add-container');
  const column = event.target.closest('.column').children[2];
  // console.log(column);

  column.classList.remove('hidden');
  event.target.closest('div').remove(addContainer);
}
