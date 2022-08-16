//* first file to execute on npm start

import ReactDOM from 'react-dom/client'; //3rd party lib


import './index.css'; //css file imported into a js file(doesn't work regularly in js)

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //this root comes from html page
root.render(<App />); //whats in the div id=root will hold the app (this is jsx syntax)
