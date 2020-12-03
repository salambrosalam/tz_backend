import React from "react";
import classes from "./BoardElement.module.css";

const BoardElement = () => {
    return (
        <table>
            <tr>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
            </tr>
            <tr>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
            </tr>
            <tr>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
                <td className={classes.square}>1</td>
            </tr>
        </table>
    )
}

export default BoardElement;
