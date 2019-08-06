import * as ActionTypes from './actionTypes'
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
    hotSearchList:[],
    mouseIn:false,
    page:1,
    totalPage:1,
});
export default (state = defaultState , action)=>{
 
        switch (action.type) {
        case ActionTypes.SEARCH_FOCUSED:
            return state.set('focused',true)
        case ActionTypes.SEARCH_BLUR:        
            return state.set('focused',false)
        case ActionTypes.HOTSEARCH_LIST:
                return state.merge({
                    hotSearchList: action.data,
                    totalPage: action.totalPage
                });           
        case ActionTypes.MOUSE_ENTER:
                return state.set('mouseIn',true)
        case ActionTypes.MOUSE_LEAVE:
                    return state.set('mouseIn',false)
        case ActionTypes.CHANGE_PAGE:
                        return state.set('page',action.page)
        default:
            return state
    }
    
}