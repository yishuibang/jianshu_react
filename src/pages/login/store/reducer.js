import {fromJS} from 'immutable';
import * as ActionTypes from './actionTypes'
const defaultState = fromJS({
    login: false
});


export default (state = defaultState , action)=>{
   
        switch (action.type) {
          case ActionTypes.LOGIN:
              return state.set('login',action.login)
          case ActionTypes.LOGOT:
                    return state.set('login',action.login)
        default:
            return state

    }
    
}