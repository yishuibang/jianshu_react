// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../header/store';

export default combineReducers({
    header:headerReducer
});