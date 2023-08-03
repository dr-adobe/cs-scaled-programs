import { buildElement, buildSvg, readPropsAndClear } from '../../scripts/utilities.js';

export default function decorate(block) {
 
  let props = readPropsAndClear(block);

  // Don't use 'express' theme; stick with 'light' or 'dark'
  let spTheme = buildElement('sp-theme', [
    ["color", "light"],
    ["theme", "light"],
    ["scale", "large"]
  ]);

  let spContainer = buildElement('div', [
    ['style', 'color: var(--spectrum-neutral-content-color-default); margin: 0.5em']
  ], spTheme);

  // TODO: Figure out all logic to determine card type
  let spCard = buildElement('sp-card', [
    ["size", "s"],
    ["horizontal", ""],
    ["heading", `${props.heading || ''}`],
    ["subheading", `${props.subheading || ''}`]
  ], spContainer)

  let spIcon = buildElement('sp-icon', [
    ["slot", "preview"],
    ["style", "width: 36px; height: 36px"]
  ], spCard);

  spIcon.appendChild(buildSvg(props.icon));

  block.append(spTheme);
}

