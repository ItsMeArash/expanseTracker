import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GlobalStyles} from "./styles/GlobalStyles.js";
import {GlobalProvider} from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyles/>
        <GlobalProvider>
            <App/>
        </GlobalProvider>
    </>
);
