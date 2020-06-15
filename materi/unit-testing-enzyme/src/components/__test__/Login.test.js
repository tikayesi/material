import {mount, shallow} from "enzyme";
import {Login} from "../Login";
import React from "react";
import {authUserName} from "../../api/user";

let wrapper;
jest.mock('../../api/user');
// const mockStore = configureStore();
// let store = mockStore();
beforeEach(() => {
    wrapper = shallow(<Login/>);
});

afterEach(() => {
    wrapper.unmount();
});
describe('Login Component', () => {
    it('should render', () => {
        expect(wrapper.find('label').length).toEqual(2);

        const inputContainer = wrapper.find('input');
        expect(inputContainer).toHaveLength(2);

        const buttonContainer = wrapper.find('button');
        expect(buttonContainer).toHaveLength(1);
    });
    it('should render input for user name & password also button sign in', () => {
        expect(wrapper.find('[name="userName"]')).toHaveLength(1);
        expect(wrapper.find({name: "userName"})).toHaveLength(1);
        expect(wrapper.find('[name="userPassword"]')).toHaveLength(1);

        const buttonContainer = wrapper.find('button');
        expect(buttonContainer.text()).toEqual("Sign In");
        expect(buttonContainer.prop('disabled')).toEqual(true);
    });

    it("should have state set properly", () => {
        expect(wrapper.state().userName).toEqual('');
        expect(wrapper.state().userPassword).toEqual('');
        expect(wrapper.state().buttonDisable).toEqual(true);
    });

    it('Input user name event & set state', () => {
        wrapper.find('input').at(0).simulate('change', {target: {value: 'edo'}});
        expect(wrapper.instance().state.userName).toEqual('edo');
    });

    it('Input user password event & set state', () => {
        wrapper.find('input').at(1).simulate('change', {target: {value: 'edo'}});
        expect(wrapper.instance().state.userPassword).toEqual('edo');
    });
    it('Button signin enable when userName & password state is filled', () => {
        wrapper.instance().setState({buttonDisable: false});
        const buttonContainer = wrapper.find('button');
        expect(buttonContainer.props().disabled).toEqual(false);
    });

    it('Sign in click event', () => {
        wrapper.instance().setState({userName: 'edo'});
        const buttonContainer = wrapper.find('button');
        buttonContainer.simulate('click');
        expect(wrapper.instance().state.buttonDisable).toEqual(true);
        // const expectedActions = [{
        //     type: 'AUTH_USER',
        //     payload: 'edo'
        // }];
        //
        // store.dispatch(authUser('edo'));
        // expect(store.getActions()).toEqual(expectedActions);

    })
});