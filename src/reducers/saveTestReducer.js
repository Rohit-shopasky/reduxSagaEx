import {IMAGES} from '../constants/index';

const saveTestReducer = (state='',action) =>{

    if(action.type===IMAGES.SAVE_TEST)
    {
        console.log("datainreducer",action.data);
        return action.data;
    }
    return state;

}

export default saveTestReducer;