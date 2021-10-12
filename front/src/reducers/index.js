//reducers
import { combineReducers } from 'redux'
const VIEWLODING = "view-loading"
const VIEWLOADED = "view-loaded"
const RAMDOMRESULT = "random-result"


function view(state = {
    loading: false
}, action) {
    switch (action.type) {
        //TODO: refactorizar
        case        VIEWLODING: {
            return {
                loading: true
            }
        }
        case  VIEWLOADED: {
            return {
                loading: false
            }
        }
        default: return state
    }
}

function random(state = {
    result: {}
}, action) {
    switch (action.type) {
        case RAMDOMRESULT: {
            return { result: action.data }
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    view, random
})

export default rootReducer