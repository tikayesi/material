import React from 'react';
import {Body, Container, Content, Footer, Header, Text, Title} from "native-base";

class Sidebar extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Header Sidebar</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>Sidebar</Text>
                </Content>
                <Footer></Footer>
            </Container>
        )
    }
}

export default Sidebar;