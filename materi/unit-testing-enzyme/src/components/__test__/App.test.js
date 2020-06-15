import {mount, shallow} from "enzyme";
import React from "react";
import {App, mapStateToProps} from "../../App";
import {Login} from "../Login";
import {MemoryRouter, Redirect, Route, Router} from "react-router-dom";
import {MainContent} from "../MainContent";


describe('App Component', () => {
    it('should render', () => {
        const wrapper = shallow(<App userActive={{}}/>);
        expect(wrapper.find('BrowserRouter').length).toEqual(1);
    });

    it('default path to login', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/']}>
                <Login/>
            </MemoryRouter>
        );
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('should show main content when /main', () => {
        const isEmptyObj = false;
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/main']}>
                {isEmptyObj ? <Redirect to='/'/> : <MainContent/>}
            </MemoryRouter>
        );
        expect(wrapper.find(MainContent)).toHaveLength(1);
    });
    it('should not show main content when empty object', () => {
        const isEmptyObj = true;
        const wrapper = mount(
            <MemoryRouter initialEntries={['/main']}>
                <Route path='/' exact component={Login}/>
                <Route path='/main' render={(props) => {
                    return isEmptyObj ? <Redirect to='/'/> : <MainContent {...props}/>
                }}/>
            </MemoryRouter>
        );
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('should show mapStateToProps value', () => {
        const initialState = {
            userActive: 'edo'
        };

        expect(mapStateToProps(initialState).userActive).toEqual('edo');
    });
});