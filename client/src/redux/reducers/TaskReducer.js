import axios from "axios";

//Константы для типов свитчей
const GET_ALL_TASKS = "GET_ALL_TASKS";
const GET_SORTED_TASKS = "GET_SORTED_TASKS";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

//Начальное состояние(state)
const initialState = {
    tasks: null,
    sortedTasks: null,
    tasksByTypes: null,
    tasksByPriority: null,
    isFetching: false,
    error: null
}
//Сам редьюсер для обработки actions
export const TaskReducer =(state = initialState, action) => {
    switch(action.type){
        //Вставляем все таски
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
            //переключаем состояние загрузки
        case TOGGLE_FETCHING:
            return{
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}
//ActionCreator для получения тасков
export const getTaskAC = task => {
    return{
        type: GET_ALL_TASKS,
        payload: task
    }
}
//ActionCreator для переключения состояния загрузки
export const toggleFetchingAC = fetching => {
    return {
        type: TOGGLE_FETCHING,
        payload: fetching
    }
}

//ThunkCreator для запроса на сервер получения тасков
export const getTaskTC = () => async dispatch => {
    try{
        //начинаем загрузку тасков
        dispatch(toggleFetchingAC(true))
        //записываем в "response" ответ с сервера
        const response = await axios.get("https://18.216.100.81:5000/api/tasks/")
        //передаем response.data
        dispatch(getTaskAC(response.data));
    } catch (e){
        console.log(e)
    }
    //заканчиваем загрузку
    dispatch(toggleFetchingAC(false))
}

//ThunkCreator для запроса на сервер для логирования в базу
export const changeStatusTC = () => async dispatch => {
    try{
        //делаем запрос
        const response = await axios.get("https://18.216.100.81:5000/api/database/")
    }catch(e){
        console.log(e)
    }
}
