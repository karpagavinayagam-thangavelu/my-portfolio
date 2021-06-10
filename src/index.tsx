import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/theme';
import * as serviceWorker from './serviceWorker';

const App = React.lazy(() => import('./App'));

const init = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(
  init(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

document.addEventListener("load", () => serviceWorker.register());

