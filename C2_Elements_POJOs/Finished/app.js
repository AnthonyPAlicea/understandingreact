let markup = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: [
                {
                    type: 'text',
                    value: 'Counter'
                }
            ]
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'Counter '
                },
                {
                    type: 'strong',
                    children: [
                        {
                            type: 'em',
                            children: [
                                {
                                    type: 'text',
                                    value: '1'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'text',
                    value: ' times'
                }
            ]
        },
        {
            type: 'button',
            children: [
                {
                    type: 'text',
                    value: 'Click me'
                }
            ]
        }
    ]
}

console.log(markup);

const main = document.getElementById("app");

function addElements(pojoElement, parentDOMNode) {
    let newDOMNode = pojoElement.type === 'text' ? document.createTextNode(pojoElement.value) : document.createElement(pojoElement.type);
    if (pojoElement.children) {
        pojoElement.children.forEach((child) => {
            addElements(child, newDOMNode);
        });
    }
    console.log(parentDOMNode);
    parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main);