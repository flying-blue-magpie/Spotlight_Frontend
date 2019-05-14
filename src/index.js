import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from 'store';
import { defaultTheme } from 'Styled/Settings/colors';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';

import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
