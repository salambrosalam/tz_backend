import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTaskTC} from "../../redux/reducers/TaskReducer";
import classes from "./MainPage.module.css";
import Board from "../Board/Board";

const MainPage = props => {
    const [tasks, setTasks] = useState();
    const [currentFilter, setCurrentFilter] = useState("default");

    const taskState = useSelector(state => {
        if (!state.task?.tasks) return null;
        const usersSet = new Set();
        const tasks = state.task?.tasks?.issues;
        tasks.forEach(task => {
            usersSet.add(task.fields.assignee.displayName)
        });

        const statuses = {
            backlog: [],
            done: [],
            inProgress: [],
            selected: [],
        }

        const res = Object.assign(...Array.from(usersSet, v => ({[v]:{
            bug: [], story: [], epic: [],
            }})));

        tasks.forEach(task => {
            const name = task.fields.assignee.displayName;
            const tempType = task.fields.issuetype.name;
            let issueType = '';
            switch (tempType) {
                case 'Баг':
                    issueType = 'bug';
                    break;

                case 'История':
                    issueType = 'story';
                    break;

                case 'Эпик':
                    issueType = 'epic';
                    break;

                default: return 'bug';
            }
            const tempStatus = task.fields.status.name;

            let status = '';
            switch (tempStatus) {
                case 'Backlog':
                    status = 'backlog';
                    break;

                case 'В работе':
                    status = 'inProgress';
                    break;

                case 'Selected for Development':
                    status = 'selected';
                    break;

                default: status = 'done';
            }
            res[name][issueType].push({...task, status });
        });
        console.log(res);
    });

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
                {/*<div>{taskState}</div>*/}
            </div>
        </div>
    )
}

export default MainPage;
