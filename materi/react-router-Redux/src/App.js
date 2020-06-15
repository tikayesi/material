import React from 'react';
import Login from "./components/login/Login";
import MainContent from "./components/mainContent/MainContent";
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import MasterProduct from "./components/product/MasterProduct";
import MasterCategory from "./components/category/MasterCategory";
import MasterProductUpdate from "./components/product/MasterProductUpdate";
import MasterCategoryUpdate from "./components/category/MasterCategoryUpdate";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path='/protected/main/masterCategoryUpdate' Component={MasterCategoryUpdate}/>
                    <PrivateRoute path='/protected/main/masterProductUpdate' Component={MasterProductUpdate}/>
                    <PrivateRoute path='/protected/main/masterCategory' Component={MasterCategory}/>
                    <PrivateRoute path='/protected/main/masterProduct' Component={MasterProduct}/>
                    <PrivateRoute path='/protected/main' Component={MainContent}/>
                    <Route path="/"
                           render={(props) => <Login {...props}/>}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
