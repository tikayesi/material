import React from 'react';
import {Container, Content, Drawer, Text, View} from "native-base";
import {Platform, StatusBar, StyleSheet} from "react-native";
import FooterSegment from "./shared/FooterSegment";
import CircleButton from "./shared/CircleButton";
import Sidebar from "./shared/Sidebar";
import HeaderSegment from "./shared/HeaderSegment";
import ContainerTop from "./shared/ContainerTop";

class PayScreen extends React.Component {
    doParkingPay = () => {
        this.props.navigation.navigate('ParkingPayment')
    };

    render() {
        return (
            <ContainerTop>
                <Text style={styles.pageHeader}>Pay / Topup</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
                    <CircleButton text={'Listrik'} iconName={"battery-charging"} onPress={this.doParkingPay}
                                  size={30}/>
                    <CircleButton text={'Topup'} iconName={"card"} onPress={this.doParkingPay} size={30}/>
                    <CircleButton text={'Parkir'} iconName={"subway"} onPress={this.doParkingPay} size={30}/>
                </View>
            </ContainerTop>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })

    },
    pageHeader: {
        color: '#4f6d7a',
        fontWeight: 'bold',
        margin: 15
    },
    buttonService: {
        flexDirection: 'column',
        margin: 5,
        height: 80
    },
});
export default PayScreen;