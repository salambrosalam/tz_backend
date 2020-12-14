import React from "react";
import loader from "../../Assets/loader.svg";
import classes from "./Loader.module.css";

//Простой лоадер перед тем как прогрузяться все таски

const Loader = () => {
    return (
        <div className={classes.wrapper}>
            <img src={loader}/>
        </div>
    )
}

export default Loader;
