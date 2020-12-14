import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeStatusTC, getTaskTC} from "../../redux/reducers/TaskReducer";
import classes from "./MainPage.module.css";
import SwitchTables from "../Board/SwitchTables";
import Loader from "../Loader/Loader";

//Основной компонент(контейнерный) приложения

const MainPage = props => {

    //Все хуки
    //useDispatch() => достаем диспатч для работы с редаксом
    const dispatch = useDispatch();
    //useSelector() => Достаем из редакса состояние подгрузки тасков
    const isFetching = useSelector(state => state.task.isFetching)
    //useState() => Работаем с локальным стейтом для обработки разных локальных событий(смена фильтра, юзера...)
    const [currentFilter, setCurrentFilter] = useState("DEFAULT");
    const [user,setUser] = useState("");
    const [type,setType] = useState("");
    const [status,setStatus] = useState("");

    //В "taskState" сортируем данные(по юзеру и типу) полученные с сервера
    //и формируем новый объект
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

    //Функция для подсчета количества заданий по ТИПУ и СТАТУСУ
    const sortStateByTypeAndStatus = (user,type,status) => {
        let totalCount = 0;
        let total = [];

        setUser(user);
        setType(type);
        setStatus(status);

       if (taskState !== null && typeof taskState[user] !== undefined){
            if(typeof taskState[user][type] !== "undefined"){
                taskState[user][type].forEach(item => {
                    if(item.status === status){
                        totalCount = totalCount + 1;
                        total.push(item);
                    }
                })
            }
       }
       return {totalCount, total}
    }

    //Функция для подсчета количества заданий по ТИПУ
    const sortStateByType = (user,type) => {
        let totalCount = 0;
        let total = [];

        setUser(user);
        setType(type);

        if (taskState !== null && typeof taskState[user] !== undefined){
            if(typeof taskState[user][type] !== "undefined"){
                totalCount = taskState[user][type].length
                total = taskState[user][type];
            }
        }
        return {totalCount, total}
    }

    //Функция для подсчета количества заданий по СТАТУСУ
    const sortStateByStatus = (user,status) => {
        let totalCount = 0;
        let total = [];

        setUser(user);
        setStatus(status);

        if (taskState !== null && typeof taskState[user] !== undefined){
            taskState[user]["bug"].forEach(item => {
                    if(item.status === status){
                       totalCount += 1;
                       total.push(item);
                    }
            })
            taskState[user]["story"].forEach(item => {
                if(item.status === status){
                    totalCount += 1;
                    total.push(item);
                }
            })
            taskState[user]["epic"].forEach(item => {
                if(item.status === status){
                    totalCount += 1;
                    total.push(item);
                }
            })
        }
        return {totalCount, total};
    }

    //Обработчик селектора фильтров
    const selectorChangeHandler = (event) => {
        setCurrentFilter(event.target.value);
        //Диспатчим запрос для логирования в базу
        dispatch(changeStatusTC());
    }
    //Монтируем компонент
    useEffect( () => {
        //получаем наши таски
        dispatch(getTaskTC());
    },[])

    //Если идет получение то показывем загрузчик
    if(isFetching){
        return <Loader/>
    }
    //Рисуем главный компонент(если загрузка закончилась)
    return (
                <div className={classes.basic}>
                    <div>
                        <div className={classes.selectorContainer}>
                            <div>Select issues by filter:</div>
                            <select className={classes.selector} onChange={selectorChangeHandler}>
                                <option value="DEFAULT">Default Filter</option>
                                <option value="BY_TYPES">Filter by issue's type</option>
                                <option value="BY_PRIORITY">Filter by priority and status</option>
                                <option value="BY_STATUS">Filter by status</option>
                            </select>
                        </div>

                        {/* Рисуем свитч из таблиц */}

                        <SwitchTables
                            filter={currentFilter}
                            sortDefaultFunction={sortStateByTypeAndStatus}
                            sortByTypesFunction={sortStateByType}
                            sortStateByStatus={sortStateByStatus}
                            user={user}
                            type={type}
                            status={status}

                        />
                    </div>
                </div>

    )
}

export default MainPage;
