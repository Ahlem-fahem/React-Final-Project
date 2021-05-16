import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import RoutesConf from "./components/RoutesConf";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <RoutesConf />
    </React.StrictMode>,
    document.getElementById('root')
);

