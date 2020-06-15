import React from 'react';
import * as Permissions from 'expo-permissions';
import {Button, Container, Content, Header, Icon, Left, Right, Text, View} from "native-base";
import {BarCodeScanner} from "expo-barcode-scanner";
import {StyleSheet, Vibration} from 'react-native';
import FooterSegment from '../shared/FooterSegment';
import ContainerBack from "../shared/ContainerBack";

class ParkingPayment extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false
    };

    async componentDidMount() {
        this.getPermission();
    }

    getPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'})
    };
    handleBarCodeScanned = ({type, data}) => {
        Vibration.vibrate();
        this.setState({scanned: true});
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    resetScanner() {
        this.setState({
            scanned: false
        });
    }

    render() {
        return (
            <ContainerBack>
                <BarCodeScanner
                    onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                    style={styles.cameraView}
                />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                    <Button style={styles.buttonScan} bordered rounded
                            onPress={() => this.setState({scanned: false})}>
                        <Text>Scan Again</Text>
                    </Button>
                </View>
            </ContainerBack>
        )
    }
}

const
    styles = StyleSheet.create({
        buttonScan: {
        },
        cameraView: {
            height: 600,
            width: '100%'
        }
    });
export default ParkingPayment;