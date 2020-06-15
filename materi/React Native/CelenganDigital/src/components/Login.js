import React from 'react';
import {StyleSheet} from "react-native";
import {Button, Col, Content, Form, Grid, Input, Item, Label, Row, Spinner, Text, Thumbnail, View} from "native-base";
import {doAuth} from "../api/user";
import {authUser} from "../actions/user";
import {connect} from "react-redux";
import {doGetBankAccount} from "../api/account";
import {bankAccount} from "../actions/account";

class LoginScreen extends React.Component {
    state = {userPin: '', loading: false};

    onChangePin = (text) => {
        this.setState({userPin: text})
    };

    doLogin = async () => {
        this.setState({loading: true});
        doAuth('edo', this.state.userPin).then((res) => {
            if (res.status === 200) {
                doGetBankAccount().then((res) => {
                    if (res.status === 200) {
                        this.props.authUser({'userFullName': 'Edward Suwirya'});
                        this.props.bankAccount(res.data);
                        this.setState({loading: false});
                        this.props.navigation.navigate('Main')
                    }
                }).catch(err => {
                    this.setState({loading: false});
                    alert('Some error occured');
                })
            }
        }).catch(err => {
            this.setState({loading: false});
            alert('Some error occured');
        })

    };

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        if (this.state.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Spinner/>
                </View>
            )
        } else {
            return (
                <View style={styles.background}>
                    <Grid>
                        <Row size={1}>
                        </Row>
                        <Row size={2} style={{
                            flexDirection: 'column',
                            padding: 30,
                            width: '100%'
                        }}>
                            <Grid>
                                <Row size={1}>
                                    <Grid>
                                        <Col size={4}>
                                            <Text style={styles.loginTextHeader}>PIN Login</Text>
                                        </Col>
                                        <Col size={1}>
                                            <Thumbnail small source={{uri: uri}}/>
                                        </Col>
                                    </Grid>
                                </Row>
                                <Row size={4}>
                                    <Grid>
                                        <Row size={1}>
                                            <Label style={styles.loginText}>Enter Your 6 digit PIN</Label>
                                        </Row>
                                        <Row size={2}>
                                            <Content>
                                                <Item>
                                                    <Input style={styles.loginInputText} secureTextEntry
                                                           keyboardType="numeric"
                                                           onChangeText={this.onChangePin}
                                                           value={this.state.userPin}/>
                                                </Item>
                                            </Content>
                                        </Row>
                                        <Row>
                                            <Text></Text>
                                        </Row>
                                    </Grid>
                                </Row>
                            </Grid>


                        </Row>
                        <Row size={1}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Button style={styles.buttonLogin} block rounded
                                        onPress={this.doLogin}>
                                    <Text style={styles.buttonLoginText}>
                                        Login
                                    </Text>
                                </Button>
                            </View>
                        </Row>
                    </Grid>

                </View>
            );
        }
    }
}

const
    styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: '#4f6d7a'

        },
        loginText: {
            color: '#F5F5F5',
        },
        loginInputText: {
            color: '#F5F5F5'
        },
        loginTextHeader: {
            color: '#F5F5F5',
            fontSize: 24,
            fontWeight: 'bold'

        },
        buttonLoginText: {
            color: '#000000'
        },
        buttonLogin: {
            backgroundColor: '#F5F5F5',
            marginLeft: 15,
            marginRight: 15
        }
    });
const mapDispatchToProps = {
    authUser: authUser,
    bankAccount: bankAccount
};

export default connect(null, mapDispatchToProps)(LoginScreen);