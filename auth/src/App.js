//imports
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

//component
class App extends Component {
    state = { logged: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyClnO9dNbyse9ggivFA5vXiFeHH9IxYRQY',
            authDomain: 'authentication-a43b1.firebaseapp.com',
            databaseURL: 'https://authentication-a43b1.firebaseio.com',
            projectId: 'authentication-a43b1',
            storageBucket: 'authentication-a43b1.appspot.com',
            messagingSenderId: '569708122964'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ logged: true });
            } else {
                this.setState({ logged: false });
            }
        });
    }

    renderLogged() {
        switch (this.state.logged) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </View>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <View style={{ flexDirection: 'row' }}>
                            <Spinner />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="#F8F8F8"
                    barStyle="dark-content"
                />
                <Header headerText="Authentication" />

                {this.renderLogged()}
            </View>
        );
    }
}

//export component
export default App;
