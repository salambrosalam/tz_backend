import React from "react";
import {Switch, Route} from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage";

//Создаем маршрутизацию на фронтенде
//Добавляем в свитч корневой маршрут компонент который он обрабатывает

export const useRoutes = () => {

    return(
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    )
}

