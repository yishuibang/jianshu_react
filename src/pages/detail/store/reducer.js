import {fromJS} from 'immutable';
import * as ActionTypes from './actionTypes'
const defaultState = fromJS({
    data: {
	
	}
});


export default (state = defaultState , action)=>{
   
        switch (action.type) {
           case ActionTypes.GET_HomeDATA: 
               return state.set('data', fromJS(action.data))
        default:
            return state

    }
    
}