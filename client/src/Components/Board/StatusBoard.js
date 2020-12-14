import React from "react";
import classes from "./Board.module.css";
import BoardElement from "../BoardElement/BoardElement";
import bugIcon from "../../Assets/bug.svg";
import storyIcon from "../../Assets/story.svg";
import epicIcon from "../../Assets/epic.svg";

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
                        <td>
                            <img className={classes.imgWrapper} src={bugIcon}/>
                            <img className={classes.imgWrapper} src={storyIcon}/>
                            <img className={classes.imgWrapper} src={epicIcon}/>
                        </td>
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
                        <td>
                            <img className={classes.imgWrapper} src={bugIcon}/>
                            <img className={classes.imgWrapper} src={storyIcon}/>
                            <img className={classes.imgWrapper} src={epicIcon}/>
                        </td>
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
