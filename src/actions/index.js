import {IMAGES} from '../constants/index';


const loadImages = (data) =>({
    type:IMAGES.LOAD,
    data
})

const setImages = (images) =>({
    type:IMAGES.LOAD_SUCCESS,
    images
})

const setError = (error) =>({
    type:IMAGES.LOAD_FAIL,
    error
})

const testAction = (data) =>({
    type:IMAGES.TEST,
    data
})

const saveTestAction = (data) =>({
    type:IMAGES.SAVE_TEST,
    data
})



export {loadImages,setImages,setError,testAction,saveTestAction};
