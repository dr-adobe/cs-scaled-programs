
const buildElement = (element, attributes, parent) => {
    let el;

    if (element === "svg" || element === "path") {
        el = document.createElementNS("http://www.w3.org/2000/svg", element);
    } else {
        el = document.createElement(element);
    }

    // Attributes should come in as array of arrays [[k, v],[k, v]]
    for (let attribute of attributes) {
        if (Array.isArray(attribute)) {
            el.setAttribute(attribute[0], attribute[1]);
        }
    }

    // Parent can be provided, or direct append with return can be used
    if (parent) {
        parent.appendChild(el);
    }

    return el;
}

const readPropsAndClear = (block) => {

    let props = {};

    [...block.children].forEach((row) => {

        let col = 0;
        let k, v;
        [...row.children].forEach((column) => {
            if (col === 0) {
                k = column.textContent;
            } else {
                v = column.textContent;
            }
            col++;
        })
        props[k] = v;
    })

    block.textContent = '';

    return props;
}

const buildSvg = (icon) => {
    
    console.log(icon);
    console.log(Icons[icon]);

    let svg = buildElement('object', [
        ['type', 'image/svg+xml'],
        ['data', Icons[icon]],
        ['width','36px'],
        ['height','36px']
    ])

    return svg;
}

export {
    buildElement, 
    readPropsAndClear,
    buildSvg
}

const Icons = {
    "thought": "icons/thought.svg",
    "gears": "icons/gears.svg",
    "filecode": "icons/file-code.svg",
    "documentfragment": "icons/document-fragment-group.svg",
    "demographic": "icons/demographic.svg"
}