import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import LoginScreen from "./src/components/Login";
import HomeScreen from "./src/components/Home";
import PayScreen from "./src/components/Pay";
import {Root} from "native-base";
import ParkingPayment from "./src/components/pay/ParkingPayment";
import SplashScreen from "./src/components/Splash";
import {Provider} from "react-redux";
import ProfileScreen from "./src/components/Profile";
import {appPersistor, appStore} from './src/components/store';
import { PersistGate } from 'redux-persist/integration/react'

const MainNavigator = createStackNavigator({
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        }, Main: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Home',
                header: null
            }
        }, Pay: {
            screen: PayScreen,
            navigationOptions: {
                header: null
            }
        }, ParkingPayment: {
            screen: ParkingPayment,
            navigationOptions: {
                header: null
            }
        }, Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Splash',
    });
const AppNavigator = createAppContainer(MainNavigator);


export default () => (
    <Provider store={appStore}>
        <PersistGate loading={null} persistor={appPersistor}>
            <Root>
                <AppNavigator/>
            </Root>
        </PersistGate>
    </Provider>
)