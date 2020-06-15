import {shallow} from "enzyme/build/index";
import {MainContent, mapStateToProps} from "../MainContent";
import React from "react";

describe('Main Content Component', () => {
    let wrapper;

    it('should render with text', () => {
        wrapper = shallow(<MainContent userActive={'edo'}/>);
        expect(wrapper.find('div').text()).toEqual('edo');
    });
    it('should render empty', () => {
        wrapper = shallow(<MainContent userActive={{}}/>);
        expect(wrapper.find('div').text()).toEqual('');
    });
    it('should show mapStateToProps value', () => {
        const initialState = {
            userActive: 'edo'
        };
        expect(mapStateToProps(initialState).userActive).toEqual('edo');
    });
});