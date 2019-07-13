import * as ActionTypes from './actionTypes'
import axios from "axios";
import {fromJS} from 'immutable';
export const searchFocused = ()=>({
    type:ActionTypes.SEARCH_FOCUSED
});
export const searchBlur = ()=>({
    type:ActionTypes.SEARCH_BLUR
});
export const hotSearchList = (data)=>({
    type:ActionTypes.HOTSEARCH_LIST,
    data:data 
});
export const getHotSearchList = ()=>{
   return (dispatch)=>{axios.get('/api/hotSearchList.json')
    .then((res)=>{
        // if(!res){return}
        console.log('kkkkk',res.data)
        console.log('jjjjj',  hotSearchList(res.data))
        dispatch(hotSearchList(res.data))
    })
    .catch(()=>{

    })}
};