import { combineReducers } from 'redux'
import {villainsReducer} from './villains'
import {moriartyReducer} from './moriarty'

const rootReducer = combineReducers({
    villains: villainsReducer,
    locations: moriartyReducer
})

export default rootReducer
//shape of state
// {
//     villains: [{villain}],
//     locations: [{morLocs}]

// }