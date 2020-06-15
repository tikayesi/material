import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock'
configure({
    adapter: new Adapter(),
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme"
});


global.fetch = fetchMock;