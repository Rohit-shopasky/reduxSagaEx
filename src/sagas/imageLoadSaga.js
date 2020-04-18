import {put,call} from 'redux-saga/effects';
import baseUrl from '../apis/api';
import {setImages,setError} from '../actions/index'
import {requestApi} from '../apis/requestApi';


// worker saga
export default function* loadImages(){

   try {
     let params = {requestType:"get",params:{},endPoint:"/"}
     let response =  yield call(requestApi,params)
      yield put(setImages(response.data));
       
   } catch (error) {
       console.log("error",error);
       yield put(setError,"something went wrong");
   }
   
}