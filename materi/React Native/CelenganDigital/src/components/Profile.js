import React from 'react';
import ContainerTop from "./shared/ContainerTop";
import {Text, Thumbnail, View} from "native-base";

class ProfileScreen extends React.Component {

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <ContainerTop>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 80
                }}>
                    <Thumbnail large source={{uri: uri}}/>
                    <Text>Edward Suwirya</Text>
                    <Text>Jakarta</Text>
                </View>
            </ContainerTop>
        )
    }
}

export default ProfileScreen;