import {applyMiddleware,combineReducers,createStore, compose} from "redux";
import thunk from "redux-thunk";
import {TaskReducer} from "./reducers/TaskReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    task: TaskReducer
})

const store =createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
