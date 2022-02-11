/* eslint-disable no-console */
export default function createElem() {
  document.body.innerHTML = `<div class="container">
      <div class="column">
        <h3 class="title-column">To do</h3>
        <ul class="column-cards" data-id="Todo">

        </ul>
        <a href="#0" class="add-card">&#43 Add another card</a>
      </div>

      <div class="column">
        <h3 class="title-column">in progress</h3>
        <ul class="column-cards" data-id="in-progress">
          
        </ul>
        <a href="#0" class="add-card">&#43 Add another card</a>
      </div>

      <div class="column">
        <h3 class="title-column">doNe</h3>
        <ul class="column-cards" data-id="doNe">

        </ul>
        <a href="#0" class="add-card">&#43 Add another card</a>

      </div>

    </div>`;

  console.log('Test: createElem.js!');
}
