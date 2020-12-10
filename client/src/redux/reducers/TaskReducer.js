import axios from "axios";

const GET_ALL_TASKS = "GET_ALL_TASKS";
const GET_SORTED_TASKS = "GET_SORTED_TASKS";

const initialState = {
    tasks: null,
    sortedTasks: null,
    tasksByTypes: null,
    tasksByPriority: null,
    isFetching: false,
    error: null
}

export const TaskReducer =(state = initialState, action) => {
    switch(action.type){
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case GET_SORTED_TASKS:
            return {
                ...state,
                sortedTasks: action.payload
            }
        default:
            return state
    }
}

export const getTaskAC = task => {
    return{
        type: GET_ALL_TASKS,
        payload: task
    }
}

export const getSortedTasksAC = tasks => {
    return {
        type: GET_SORTED_TASKS,
        payload: tasks
    }
}

export const getTaskTC = () => async dispatch => {
    try{
        const response = await axios.get("http://localhost:5000/api/tasks/")
        dispatch(getTaskAC(response.data));
    } catch (e){
        console.log(e)
    }
}

export const getSortedTasksTC = (tasks) => dispatch => {
    dispatch(getSortedTasksAC(tasks));
}

export const changeStatusTC = () => async dispatch => {
    try{
        const response = await axios.get("http://localhost:5000/api/database/")
    }catch(e){
        console.log(e)
    }
}
