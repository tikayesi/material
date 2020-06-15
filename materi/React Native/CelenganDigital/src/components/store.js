import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {userActiveReducer} from "../reducers/user";
import {bankAccountReducer} from "../reducers/account";
import {
    AsyncStorage,
} from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const appReducer = combineReducers({
    userActive: userActiveReducer,
    bankAccount: bankAccountReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const appStore = createStore(
    persistedReducer
);
export const appPersistor = persistStore(appStore);