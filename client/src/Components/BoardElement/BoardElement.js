import React from "react";
import classes from "./BoardElement.module.css";

const BoardElement = (props) => {

    switch(props.filterType){
        case "DEFAULT":
            return (
                <table>
                    <tr>
                        <td className={classes.square}>
                            <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                            {props.BackLogBug}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.square}>
                            <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                                {props.BackLogStory}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.square}>
                            <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                                {props.BackLogEpic}
                            </a>
                        </td>
                    </tr>
                </table>
            )
        case "BY_STATUS":
            return(
                <table>
                    <tr>
                        <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        <td className={classes.square}>{props.BackLogBug}</td>
                        </a>
                    </tr>
                </table>

            )
    }

}

export default BoardElement;
