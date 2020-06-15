import React from "react";
import {appReducer} from "./reducers/appReducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

class Root extends React.Component {
    render() {
        const store = createStore(appReducer);
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Root;