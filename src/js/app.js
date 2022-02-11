import createElem from './createElement';
import cardControl from './cardControl';
import { loadStorage } from './localStorage';

console.log('Test: app.js Hello!');

createElem();

cardControl();

window.addEventListener('load', loadStorage);
