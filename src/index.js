import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store'
import {Provider} from 'react-redux'
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));