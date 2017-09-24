import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppContainer = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
