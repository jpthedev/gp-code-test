import { CreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialstate = {};
const middleware = [thunk]

const store = CreateStore(
    rootReducer,
    initialstate,
    applyMiddleware(...middleware)
);

export default store;