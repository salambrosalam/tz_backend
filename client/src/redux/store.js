import {applyMiddleware,combineReducers,createStore, compose} from "redux";
import thunk from "redux-thunk";
import {TaskReducer} from "./reducers/TaskReducer";

//Подключаем Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Все редьюсеры в приложении
const reducers = combineReducers({
    task: TaskReducer
})

//Формируем стор и добавляем redux-thunk для обработки асинхронных запросов на сервер
const store =createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
