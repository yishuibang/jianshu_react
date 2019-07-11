import * as ActionTypes from './actionTypes'

const defaultState = {
    focused:false,
}
export default (state = defaultState , action)=>{
    if(action.type === ActionTypes.SEARCH_FOCUSED){
    return {focused:true}
    }
    if(action.type === ActionTypes.SEARCH_BLUR){
        return {focused:false}
        }
return state
}