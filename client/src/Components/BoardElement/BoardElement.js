import React from "react";
import classes from "./BoardElement.module.css";



const BoardElement = (props) => {
    const renderRow = (value) => {
        if (props.filterType === 'BY_TYPES') {
            return (
                <td
                    className={classes.square}
                >
                    <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        {value.length}
                    </a>
                </td>
            )
        }

        const priority = {
            lowest: [],
            low: [],
            medium: [],
            high: [],
            highest: [],
        };

        if (value?.length > 0) {
            value.forEach(item => {
                priority[item?.fields?.priority?.name?.toLowerCase()].push(item);
            })
        }



        if (props.filterType === 'BY_PRIORITY') {
            return Object.values(priority).map((item, i) => (
                <td
                    className={classes.square}
                    key={i}
                >
                    <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        {console.log(item)}
                        {item.length}
                    </a>
                </td>
            ))
        }

        return Object.values(priority).map((item, i) => (
            <td
                className={classes.square}
                key={i}
            >
                <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                    {item.length}
                </a>
            </td>
        ))


    };

    switch(props.filterType){
        case "DEFAULT":
            return (
                <table>
                    <tr>
                        {renderRow(props.BackLogBug.total)}
                    </tr>
                    <tr>
                        {renderRow(props.BackLogStory.total)}
                    </tr>
                    <tr>
                        {renderRow(props.BackLogEpic.total)}
                    </tr>
                </table>
            )
        case "BY_TYPES":
            return (
                <table>
                    <tr>
                        {renderRow(props.BackLogBug.total)}
                    </tr>
                    <tr>
                        {renderRow(props.BackLogStory.total)}
                    </tr>
                    <tr>
                        {renderRow(props.BackLogEpic.total)}
                    </tr>
                </table>
            )
        case "BY_PRIORITY":
            return (
                <table>
                    <tr>
                        {renderRow([...props.BackLogBug.total, ...props.BackLogStory.total, ...props.BackLogEpic.total])}
                    </tr>
                </table>
            )
        case "BY_STATUS":
            return(
                <table>
                    <tr>
                        <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                            <td className={classes.square}>{props.BackLogBug.total.length}</td>
                        </a>
                    </tr>
                </table>

            )
    }

}

export default BoardElement;
