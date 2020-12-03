import axios from "axios";
import {taskAPI} from "../../api/api";

const GET_ALL_TASKS = "GET_ALL_TASKS";

const initialState = {
    tasks: null,
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

export const getTaskTC = () => async dispatch => {
    try{
        const response = await axios.get("http:localhost:5000/api/tasks/")
        dispatch(getTaskAC(response.data.total));
        console.log(response.data);
    } catch (e){
        console.log(e)
    }
}
