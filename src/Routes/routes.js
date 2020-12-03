import React from "react";
import {Switch, Route} from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage";

export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    )
}

