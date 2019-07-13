import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
    hotSearchList:[],
});
export default (state = defaultState , action)=>{
    if(action.type === ActionTypes.SEARCH_FOCUSED){
    return state.set('focused',true)
    }
    if(action.type === ActionTypes.SEARCH_BLUR){
        return state.set('focused',false)
    }
    if (action.type === ActionTypes.HOTSEARCH_LIST) {
        console.log('ooooo',action)
        return state.set('hotSearchList',action.data)
    }
return state
}