import { applyMiddleware, createStore } from 'redux';

import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {
    IndegoData: {
        data: []
    }
}

const indegoStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
)

export default indegoStore
