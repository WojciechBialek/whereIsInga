import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:5ab26eb6-9b31-4cd0-ac22-2af1b395eb1d',
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_tUyk1Lw3l',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '5s9uvq81ib4fv2io8mc0pn84da',
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
