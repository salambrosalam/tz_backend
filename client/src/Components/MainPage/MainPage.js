import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeStatusTC, getTaskTC} from "../../redux/reducers/TaskReducer";
import classes from "./MainPage.module.css";
import SwitchTables from "../Board/SwitchTables";

const MainPage = props => {
    const dispatch = useDispatch();
    const [currentFilter, setCurrentFilter] = useState("DEFAULT");
    const [user,setUser] = useState("");
    const [type,setType] = useState("");
    const [status,setStatus] = useState("");

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
            res[name][issueType].push({...task, status});
        });
        return res;
    });

    const sortStateByTypeAndStatus = (user,type,status) => {
        let totalCount = 0;

        setUser(user);
        setType(type);
        setStatus(status);

       if (taskState !== null && typeof taskState[user] !== undefined){
            if(typeof taskState[user][type] !== "undefined"){
                taskState[user][type].forEach(item => {
                    if(item.status === status){
                        totalCount = totalCount + 1;
                    }
                })
            }
       }
       return totalCount
    }

    const sortStateByType = (user,type) => {
        let totalCount = 0;

        setUser(user);
        setType(type);

        if (taskState !== null && typeof taskState[user] !== undefined){
            if(typeof taskState[user][type] !== "undefined"){
                totalCount = taskState[user][type].length
            }
        }
        return totalCount
    }

    const sortStateByStatus = (user,status) => {
        let totalCount = 0;

        setUser(user);
        setStatus(status);

        if (taskState !== null && typeof taskState[user] !== undefined){
            taskState[user]["bug"].forEach(item => {
                    if(item.status === status){
                       totalCount += 1;
                    }
            })
            taskState[user]["story"].forEach(item => {
                if(item.status === status){
                    totalCount += 1;
                }
            })
            taskState[user]["epic"].forEach(item => {
                if(item.status === status){
                    totalCount += 1;
                }
            })
        }
        return totalCount;
    }

    const selectorChangeHandler = (event) => {
        setCurrentFilter(event.target.value);
        dispatch(changeStatusTC());
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
                        <option value="DEFAULT">Default Filter</option>
                        <option value="BY_TYPES">Filter by issue's type</option>
                        <option value="BY_STATUS">Filter by status</option>
                    </select>
                </div>
                <SwitchTables
                    filter={currentFilter}
                    sortDefaultFunction={sortStateByTypeAndStatus}
                    sortByTypesFunction={sortStateByType}
                    sortStateByStatus={sortStateByStatus}
                    user={user}
                    type={type}
                    status={status}/>
            </div>
        </div>
    )
}

export default MainPage;
