import React from 'react';
import {authUser} from "../action";
import {connect} from "react-redux";
import {authUserName} from "../api/user";

export class Login extends React.Component {
    state = {userName: '', userPassword: '', buttonDisable: true};

    onSignin = async () => {
        this.setState({buttonDisable: true});
        const response = await authUserName(this.state.userName);
        const data = await response.json();
        if (data.status === 'ok') {
            this.props.authUser(this.state.userName);
            this.props.history.replace({pathname: '/main'});
        } else {
            this.setState({buttonDisable: false})
        }

    };
    onButtonActivate = () => {
        if (this.state.userName && this.state.userPassword) {
            this.setState({buttonDisable: false});
        } else {
            this.setState({buttonDisable: true});
        }
    };
    onInputNameChange = async (event) => {
        await this.setState({userName: event.target.value});
        this.onButtonActivate();
    };
    onInputPasswordChange = async (event) => {
        await this.setState({userPassword: event.target.value});
        this.onButtonActivate();
    };

    render() {
        return (
            <div>
                <div>
                    <label>User Name</label>
                    <input type="text" value={this.state.userName} name="userName" onChange={this.onInputNameChange}/>
                    <label>User Password</label>
                    <input type="password" value={this.state.userPassword} name="userPassword"
                           onChange={this.onInputPasswordChange}/>
                    <button disabled={this.state.buttonDisable} onClick={this.onSignin}>Sign In</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    authUser: authUser
};
export default connect(null, mapDispatchToProps)(Login);