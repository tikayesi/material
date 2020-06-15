import React from 'react';
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {userActiveReducer} from "./reducers";
import {connect, Provider} from "react-redux";

export class App extends React.Component {

    render() {
        const isEmptyObj = Object.entries(this.props.userActive).length === 0;
        return (
            <div>
                <BrowserRouter>
                    <Route path='/' exact component={Login}/>
                    <Route path='/main' render={(props) => {
                        return isEmptyObj ? <Redirect to='/'/> : <MainContent {...props}/>
                    }}/>
                </BrowserRouter>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {userActive: state.userActive}
};
export default connect(mapStateToProps)(App);