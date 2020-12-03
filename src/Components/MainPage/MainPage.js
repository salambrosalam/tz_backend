import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTaskTC} from "../../redux/reducers/TaskReducer";
import classes from "./MainPage.module.css";
import Board from "../Board/Board";

const MainPage = props => {
    const [tasks, setTasks] = useState();
    const [currentFilter, setCurrentFilter] = useState("default");

    const taskState = useSelector(state => state.task.tasks !== null ? state.task.tasks : "not yet");

    const dispatch = useDispatch();

    const selectorChangeHandler = (event) => {
        console.log("Filter is changed on:",event.target.value);
        setCurrentFilter(event.target.value);
    }

    useEffect( () => {
        dispatch(getTaskTC());
    },[])
    return (
        <div className={classes.basic}>
            <div>
                <div className={classes.title}>
                    <div className={classes.titleText}>Table of tasks from "SALAM" dashboard</div>
                </div>
                <div className={classes.selectorContainer}>
                    <select className={classes.selector} onChange={selectorChangeHandler}>
                        <option value="default">Default Filter</option>
                        <option value="byType">Filter by issue's type</option>
                        <option value="byPriority">Filter by priority</option>
                    </select>
                </div>
                <Board filter={currentFilter}/>
                I am MainPage that's OK)))
                <div>{taskState}</div>
            </div>
        </div>
    )
}

export default MainPage;
