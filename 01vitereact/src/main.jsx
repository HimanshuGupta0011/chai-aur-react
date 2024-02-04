import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>My App!</h1>
    </div>
  )
}

const anotherElem = (
  <a href="https://google.com" target="_blank">Visit Google!</a>
)

const pElem = React.createElement(
  'p',
  {},
  'visit'
)

const reactElem = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  pElem,
  pElem
)

console.log(reactElem) //logs object
console.log(App) //logs compiled function
console.log(App()) //logs object

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElem
)
