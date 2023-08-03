import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  // const ul = document.createElement('ul');
  // [...block.children].forEach((row) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = row.innerHTML;
  //   [...li.children].forEach((div) => {
  //     if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
  //     else div.className = 'cards-card-body';
  //   });
  //   ul.append(li);
  // });
  // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  // block.textContent = '';
  // block.append(ul);

  /* This is just a test */
  
  [...block.children].forEach((row) => {
    console.log(row);
  })
  block.textContent = '';

  const spCard = document.createElement('sp-card');
  spCard.setAttribute("size", "s");
  spCard.setAttribute("horizontal", "");
  spCard.setAttribute("heading", "Test Heading");
  spCard.setAttribute("subheading", "Sub Heading");

  const spIcon = document.createElement("sp-icon");
  spIcon.setAttribute("slot", "preview");
  spIcon.setAttribute("style", "width: 36px; height: 36px");

  const svg = document.createElement("svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 36 36");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("role", "img");
  svg.setAttribute("fill", "currentColor");

  const pathOne = document.createElement("path");
  pathOne.setAttribute("d", "M20 2v10h10L20 2z");
  
  const pathTwo = document.createElement("path");
  pathTwo.setAttribute("d", "M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm7 15.5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z");

  svg.appendChild(pathOne);
  svg.appendChild(pathTwo);
  spIcon.appendChild(svg);
  spCard.appendChild(spIcon);

  block.append(spCard);
}
