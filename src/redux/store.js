import {applyMiddleware,combineReducers,createStore} from "redux";
import thunk from "redux-thunk";
import {TaskReducer} from "./reducers/TaskReducer";

const reducers = combineReducers({
    task: TaskReducer
})

const store =createStore(reducers,applyMiddleware(thunk))

window.store = store;

export default store;
