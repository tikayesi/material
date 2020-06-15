import React from 'react';
import {Card, CardItem, Col, Grid, Icon, List, ListItem, Row, StyleProvider, Text, View} from "native-base";
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import {connect} from "react-redux";
import {logout} from "../actions/user";
import accounting from 'accounting-js';
import ContainerTop from "./shared/ContainerTop";

class HomeScreen extends React.Component {
    state = {isShowDetail: false, iconName: 'arrow-dropdown'};

    doShowDetail = () => {
        if (this.state.isShowDetail) {
            const bankAccountList = this.props.bankAccount;
            const bankAccountItems = bankAccountList.map((acc) => {
                return (
                    <ListItem key={acc.id}>
                        <Grid>
                            <Col size={2} style={{flex: 1, flexDirection: 'row'}}>
                                <Text>
                                    {acc.accType}
                                </Text>
                            </Col>
                            <Col size={3} style={{flex: 1, flexDirection: 'row-reverse'}}>
                                <Text note>
                                    {accounting.formatNumber(Number(acc.balance), 0)}
                                </Text>
                            </Col>
                        </Grid>
                    </ListItem>
                )
            });
            return (
                <Row style={{height: 125}}>
                    <View style={{flex: 1}}>
                        <List>
                            {bankAccountItems}
                        </List>
                    </View>
                </Row>
            )
        } else {
            return null;
        }
    };

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <ContainerTop>
                    <Card>
                        <CardItem header>
                            <Grid>
                                <Row style={{height: 50}}>
                                    <View style={{flex: 1}}>
                                        <Text
                                            style={{textAlign: 'center'}}>Hi,.. {this.props.userActive.userFullName}</Text>
                                    </View>
                                </Row>
                                {this.doShowDetail()}
                            </Grid>
                        </CardItem>
                        <CardItem footer button onPress={() => {
                            if (this.state.isShowDetail) {
                                this.setState({
                                    isShowDetail: !this.state.isShowDetail,
                                    iconName: 'arrow-dropdown'
                                })
                            } else {
                                this.setState({
                                    isShowDetail: !this.state.isShowDetail,
                                    iconName: 'arrow-dropup'
                                })
                            }

                        }}>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>
                                    <Icon name={this.state.iconName}></Icon>
                                </Text>
                            </View>
                        </CardItem>
                    </Card>
                </ContainerTop>
            </StyleProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {userActive: state.userActive, bankAccount: state.bankAccount};
};

const mapDispatchToProps = {
    logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);