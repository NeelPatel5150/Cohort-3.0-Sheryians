// const h1 = document.createElement('h1');

// h1.textContent = 'Hello React!';

// document.body.appendChild(h1);

// console.log(`Real Dom h1:`, h1);

const rh1 = React.createElement('h1', null, 'Hello React!');

// console.log(`rh1:`, rh1);

let realdomelem = document.querySelector('#root');

let rootofreact = ReactDOM.createRoot(realdomelem);

rootofreact.render(rh1);

//? ES Module import and export

// import { add, sub } from './math.js';

// console.log(`add:`, add(10, 20));

// console.log(`sub:`, sub(10, 20));

//? ES Module import and export (use relative path)
import { add, sub } from './math.js';

console.log(`add:`, add(10, 20));

console.log(`sub:`, sub(10, 20));


