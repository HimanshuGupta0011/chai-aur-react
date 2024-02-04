function customRender(reactElem, container){
    let domElem = document.createElement(reactElem.type)
    domElem.innerHTML = reactElem.children
    /*
    domElem.setAttribute('href', reactElem.props.href)
    domElem.setAttribute('target', reactElem.props.target)
    */

    for (const prop in reactElem.props) {
        domElem.setAttribute(prop, reactElem.props[prop])
    }
    
    container.appendChild(domElem)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click to visit google.com"
}

const root = document.getElementById('root')

customRender(reactElement, root)
