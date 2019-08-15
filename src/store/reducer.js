// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';
import {headerReducer} from '../header/store';
import {homeReducer} from '../pages/home/store';
import {detailReducer} from '../pages/detail/store';
import {loginReducer} from '../pages/login/store'
export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
});