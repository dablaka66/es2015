import React from "react";
import ReactDom from 'react-dom';
import fruits from './foods';

const choice = (items) => {
    return fruits[Math.floor(Math.random() * items.length)];
  }


const remove = (item,items) => {
    items.filter(i => !( i === item));

}

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
); */

export {choice, remove } ;