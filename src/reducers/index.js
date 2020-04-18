import {combineReducers} from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import saveTestReducer from './saveTestReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images:    imagesReducer,
    error:     errorReducer,
    saveTest:  saveTestReducer,
})

export default rootReducer;


