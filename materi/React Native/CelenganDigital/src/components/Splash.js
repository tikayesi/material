import React from 'react';
import {BackHandler, Image, StyleSheet} from "react-native";
import {View} from "native-base";
import * as Font from "expo-font/build/Font";

class SplashScreen extends React.Component {
    async componentWillMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
        await Font.loadAsync({
            Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf')
        });
    }

    doRedirect = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2500)
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/Celengan.png')}/>
                {this.doRedirect()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
    }
});
export default SplashScreen;