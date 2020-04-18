import {take,put,call,takeEvery} from 'redux-saga/effects';
import loadImages from './imageLoadSaga'; 
import {requestApi} from '../apis/requestApi';
import {saveTestAction} from '../actions/index'


function* test(data){
  // console.log("data",data);

   try {

    let params = {requestType:"post",params:data.data,endPoint:"/submit"}
    let response= yield call(requestApi,params)
    yield put(saveTestAction(response.data));
       
   } catch (error) {
       console.log("error",error);
   }
   
}

// watcher saga
function* rootSaga(){
   yield takeEvery("IMAGES_LOAD",loadImages)
   yield takeEvery("TEST",test)
}


export default rootSaga;