//LIBRERÍAS DE REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './main.css'

const appElement = document.getElementById('root');
const root = ReactDOM.createRoot(appElement);


root.render(<App />)

/* ReactDom es la librería, un método de la librería es createRoot, al que le pasas
un elemento del dom el cual renderiza App, que es el componente.

ReactDOM.createRoot(document.getElementById('root')).render(<App />); */