import React from "react";
import classes from "./BoardElement.module.css";

const BoardElement = (props) => {
    switch(props.filterType){
        case "DEFAULT":
            return (
                <table>
                    <tr>
                        <td className={classes.square}>{props.BackLogBug}</td>
                    </tr>
                    <tr>
                        <td className={classes.square}>{props.BackLogStory}</td>
                    </tr>
                    <tr>
                        <td className={classes.square}>{props.BackLogEpic}</td>
                    </tr>
                </table>
            )
        case "BY_STATUS":
            return(
                <table>
                    <tr>
                        <td className={classes.square}>{props.BackLogBug}</td>
                    </tr>
                </table>

            )
    }

}

export default BoardElement;
