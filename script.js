function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'testing javascript DOM append function';
  document.body.appendChild(para);
}

let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
