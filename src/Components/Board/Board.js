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

const Board = (props) => {
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
                    <tr className={classes.typesWrapper}>
                        <span className={classes.firstColumn}>Assignee</span>
                        <span className={classes.secondColumn}>Type</span>
                    </tr>
                    <th>
                        <img className={classes.arrowImgWrapper} src={redArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={orangeArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={yellowArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={lightgreenArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={greenArrowIcon}/>
                    </th>
                    <th>
                        <img className={classes.arrowImgWrapper} src={redArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={orangeArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={yellowArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={lightgreenArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={greenArrowIcon}/>
                    </th>
                    <th>
                        <img className={classes.arrowImgWrapper} src={redArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={orangeArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={yellowArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={lightgreenArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={greenArrowIcon}/>
                    </th>
                    <th>
                        <img className={classes.arrowImgWrapper} src={redArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={orangeArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={yellowArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={lightgreenArrowIcon}/>
                        <img className={classes.arrowImgWrapper} src={greenArrowIcon}/>
                    </th>
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
                    <td ><BoardElement className={classes.boardElementWrapper}/></td>
                    <td className={classes.boardElementWrapper}><BoardElement/></td>
                    <td className={classes.boardElementWrapper}><BoardElement/></td>
                    <td className={classes.boardElementWrapper}><BoardElement/></td>
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
                    <td><BoardElement/></td>
                    <td><BoardElement/></td>
                    <td><BoardElement/></td>
                    <td><BoardElement/></td>
                </tr>
            </table>
        </div>
    )
}

export default Board;
