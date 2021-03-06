import React from "react";
import classes from "./Board.module.css";
import BoardElement from "../BoardElement/BoardElement";
import bugIcon from "../../Assets/bug.svg";
import storyIcon from "../../Assets/story.svg";
import epicIcon from "../../Assets/epic.svg";

//Разметка таблицы по фильтру "sort by types"

const TypeBoard = (props) => {
    return (
        <div className={classes.board}>

            {/* Основа таблицы */}

            <table>
                <tr>
                    <th className={classes.firstColumn}>Assignee Block</th>
                    <th>Sorted by types</th>
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

                    {/* Элементы которые будут отрендерены  */}

                    <td ><BoardElement className={classes.boardElementWrapper}
                                       BackLogBug={props.sortByTypesFunction("_PiXeL_ TV","bug")}
                                       BackLogStory={props.sortByTypesFunction("_PiXeL_ TV","story")}
                                       BackLogEpic={props.sortByTypesFunction("_PiXeL_ TV","epic")}
                                       filterType={props.filter}
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

                    {/* Элементы которые будут отрендерены  */}

                    <td ><BoardElement className={classes.boardElementWrapper}
                                       BackLogBug={props.sortByTypesFunction("Serg Bro","bug")}
                                       BackLogStory={props.sortByTypesFunction("Serg Bro","story")}
                                       BackLogEpic={props.sortByTypesFunction("Serg Bro","epic")}
                                       filterType={props.filter}
                    /></td>
                </tr>
            </table>
        </div>
    )
}

export default TypeBoard;
