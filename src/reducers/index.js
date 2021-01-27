import {combineReducers} from 'redux'

import tilesReducer from './tilesReducer'

const rootReducer = combineReducers({
    tiles: tilesReducer,
})

export default rootReducer