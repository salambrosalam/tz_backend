import React from "react";
import classes from "./Board.module.css";
import BoardElement from "../BoardElement/BoardElement";
import bugIcon from "../../Assets/bug.png";
import storyIcon from "../../Assets/story.jpg";
import epicIcon from "../../Assets/epic.png";
import redArrowIcon from "../../Assets/red_arrow.png";
import orangeArrowIcon from "../../Assets/orange_arrow.png";
import yellowArrowIcon from "../../Assets/yellow_arrow.png";
import lightgreenArrowIcon from "../../Assets/lightgreen_arrow.png";
import greenArrowIcon from "../../Assets/green_arrow.png";

const StatusBoard = (props) => {
    return (
        <div className={classes.board}>
            <table>
                <tr>
                    <th className={classes.firstColumn}>Assignee Block</th>
                    <th>Backlog</th>
                    <th>Done</th>
                    <th>In Progress</th>
                    <th>Selected for development</th>
                </tr>
                <tr>
                    <tr>
                        <td className={classes.assignee}>romashkin1273@gmail.com</td>
                    </tr>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("_PiXeL_ TV","backlog")}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortStateByStatus("_PiXeL_ TV","done")}
                        filterType={props.filter}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("_PiXeL_ TV","inProgress")}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("_PiXeL_ TV","selected")}
                    /></td>
                </tr>
                <tr>
                    <tr>
                        <td className={classes.assignee}>light228bro@gmail.com</td>
                    </tr>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("Serg Bro","backlog")}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("Serg Bro","done")}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("Serg Bro","inProgress")}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        filterType={props.filter}
                        BackLogBug={props.sortStateByStatus("Serg Bro","selected")}
                    /></td>
                </tr>
            </table>
        </div>
    )
}

export default StatusBoard;
