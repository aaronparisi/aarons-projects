import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

window.onbeforeunload = () => {
  window.scrollTo(0,0)
}

window.onload = () => {
  history.scrollRestoration = "manual"
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Content />, root);
});