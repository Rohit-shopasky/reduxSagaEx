import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";
import  createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';


const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        )
    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore;