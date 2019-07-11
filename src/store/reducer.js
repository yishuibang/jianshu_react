import {combineReducers} from 'redux';

import {headerReducer} from '../header/store';

export default combineReducers({
    header:headerReducer
});