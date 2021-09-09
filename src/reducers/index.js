import changeNumber from './counter';

import { combineReducers } from 'redux';

const Reducer = combineReducers({
    count: changeNumber
})

export default Reducer;