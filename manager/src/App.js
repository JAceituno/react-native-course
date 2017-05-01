//imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//component
class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDopb2s8Uz6LeQFyZEIdDTgBd_HfZbwnKY',
            authDomain: 'manager-7cb7f.firebaseapp.com',
            databaseURL: 'https://manager-7cb7f.firebaseio.com',
            projectId: 'manager-7cb7f',
            storageBucket: 'manager-7cb7f.appspot.com',
            messagingSenderId: '441878200689'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

//export component
export default App;
