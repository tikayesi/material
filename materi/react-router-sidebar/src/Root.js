import React from 'react';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {changeSessionReducer, userActiveReducer} from "./reducers/user";
import {getListProduct, updateProduct} from "./reducers/product";
import {getListCategory, selectCategory, updateCategory} from "./reducers/category";
import {menuActive, menuHeaderActive} from "./reducers/menu";

class Root extends React.Component {
    render() {
        const appReducer = combineReducers({
            userActive: userActiveReducer,
            changeSession: changeSessionReducer,
            listProduct: getListProduct,
            updateProduct: updateProduct,
            listCategory: getListCategory,
            updateCategory: updateCategory,
            selectCategory: selectCategory,
            menuActive: menuActive,
            menuHeaderActive: menuHeaderActive
        });

        const rootReducer = (state, action) => {
            if (action.type === 'LOGOUT') {
                state = undefined;
            }

            return appReducer(state, action);
        };
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Root;