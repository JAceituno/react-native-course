//Android code

//Imports
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create Component
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#F8F8F8"
                barStyle="dark-content"
            />
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

//Render components
AppRegistry.registerComponent('AwesomeProject', () => App);
