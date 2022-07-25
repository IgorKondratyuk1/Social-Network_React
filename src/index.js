import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from "./redux/reduxStore";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
);