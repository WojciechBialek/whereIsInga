import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:cb412170-5757-44be-a054-eae873041e5d', 
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1', 
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_tUyk1Lw3l',
        // OPTIONAL - Amazon Cognito Web Client ID
        // userPoolWebClientId: 'XX-XXXX-X_abcd1234', 
    }
});

console.log( currentConfig = Auth.configure());

// export default currentConfig;