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
    if(action.type){
        switch (action.type) {
        case ActionTypes.SEARCH_FOCUSED:
            return state.set('focused',true)
            break;
        case ActionTypes.SEARCH_BLUR:        
            return state.set('focused',false)
            break;
        case ActionTypes.HOTSEARCH_LIST:
                return state.merge({
                    hotSearchList: action.data,
                    totalPage: action.totalPage
                });           
                 break; 
        case ActionTypes.MOUSE_ENTER:
                return state.set('mouseIn',true)
            break;
        case ActionTypes.MOUSE_LEAVE:
                    return state.set('mouseIn',false)
                break;
        case ActionTypes.CHANGE_PAGE:
                        return state.set('page',action.page)
                    break;
                
        default:
            return state
            break;
    }

}
    
}