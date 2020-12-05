import React from "react";
import classes from "./Board.module.css";
import BoardElement from "../BoardElement/BoardElement";
import bugIcon from "../../Assets/bug.png";
import storyIcon from "../../Assets/story.jpg";
import epicIcon from "../../Assets/epic.png";

const DefaultBoard = (props) => {
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
                    <td ><BoardElement className={classes.boardElementWrapper}
                            BackLogBug={props.sortDefaultFunction("_PiXeL_ TV","bug","backlog")}
                            BackLogStory={props.sortDefaultFunction("_PiXeL_ TV","story","backlog")}
                            BackLogEpic={props.sortDefaultFunction("_PiXeL_ TV","epic","backlog")}
                            filterType={props.filter}
                                       user={props.user}
                                       type={props.type}
                                       status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("_PiXeL_ TV","bug","done")}
                        BackLogStory={props.sortDefaultFunction("_PiXeL_ TV","story","done")}
                        BackLogEpic={props.sortDefaultFunction("_PiXeL_ TV","epic","done")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("_PiXeL_ TV","bug","inProgress")}
                        BackLogStory={props.sortDefaultFunction("_PiXeL_ TV","story","inProgress")}
                        BackLogEpic={props.sortDefaultFunction("_PiXeL_ TV","epic","inProgress")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("_PiXeL_ TV","bug","selected")}
                        BackLogStory={props.sortDefaultFunction("_PiXeL_ TV","story","selected")}
                        BackLogEpic={props.sortDefaultFunction("_PiXeL_ TV","epic","selected")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
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
                    <td ><BoardElement className={classes.boardElementWrapper}
                                       BackLogBug={props.sortDefaultFunction("Serg Bro","bug","backlog")}
                                       BackLogStory={props.sortDefaultFunction("Serg Bro","story","backlog")}
                                       BackLogEpic={props.sortDefaultFunction("Serg Bro","epic","backlog")}
                                       filterType={props.filter}
                                       user={props.user}
                                       type={props.type}
                                       status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("Serg Bro","bug","done")}
                        BackLogStory={props.sortDefaultFunction("Serg Bro","story","done")}
                        BackLogEpic={props.sortDefaultFunction("Serg Bro","epic","done")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("Serg Bro","bug","inProgress")}
                        BackLogStory={props.sortDefaultFunction("Serg Bro","story","inProgress")}
                        BackLogEpic={props.sortDefaultFunction("Serg Bro","epic","inProgress")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
                    /></td>
                    <td className={classes.boardElementWrapper}><BoardElement
                        BackLogBug={props.sortDefaultFunction("Serg Bro","bug","selected")}
                        BackLogStory={props.sortDefaultFunction("Serg Bro","story","selected")}
                        BackLogEpic={props.sortDefaultFunction("Serg Bro","epic","selected")}
                        filterType={props.filter}
                        user={props.user}
                        type={props.type}
                        status={props.status}
                    /></td>
                </tr>
            </table>
        </div>
    )
}

export default DefaultBoard;
