import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return(
      <div>
        <h1>My Custom React App</h1>
      </div>
    )
}
const AnotherUser = "Jane Smith";

// const ReactElement = {
//     type:'a',
//     props: {
//         href: 'https://google.com',
//         target:"_blank",
//     },
//     children:"Click me",

// }
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me ',
  AnotherUser
)
const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Click me
  </a>
)
createRoot(document.getElementById('root')).render(
     ReactElement

    
)
