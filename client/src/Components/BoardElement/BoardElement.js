import React from "react";
import classes from "./BoardElement.module.css";

//Настраиваемый стиль каждой клетки
let currentSquare = classes.square;

//Компонент отресовующий мини-таблички с количеством тасков в каждой свой клетке
const BoardElement = (props) => {

    //Функия для окрашивания фона в желтый если таск существует больше 5 дней
    const sortByDate = value => {

        //время создания этого таска
        let issueCreatedDate = value?.fields?.created

        //преобразуем в количество милисекунд
        let parsedDate = Date.parse(issueCreatedDate);

        //берем сегодняшеюю дату
        let date = Date.now();

        //считаем разницу
        let difference = (date - parsedDate)/(1000*60*60*24);

        if(difference >= 5){
            currentSquare = classes.yellowSquare;
        }else{
            currentSquare = classes.square;
        }
    }

    //Функция препроцессор для каждой строки <BoardElement>
    const renderRow = (value) => {

        const priority = {
            lowest: [],
            low: [],
            medium: [],
            high: [],
            highest: [],
        };

        //сортируем таски по приоритету
        if (value?.length > 0) {
            value.forEach(item => {
                priority[item?.fields?.priority?.name?.toLowerCase()].push(item);
                sortByDate(item)
            })
        } else{
            currentSquare = classes.square
        }

        if (props.filterType === 'BY_TYPES') {
            return (
                <td
                    className={currentSquare}
                >
                    <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        {value.length}
                    </a>
                </td>
            )
        }

        if (props.filterType === 'BY_PRIORITY') {
            return Object.values(priority).map((item, i) => (
                <td
                    className={item.length > 0 ? currentSquare : classes.square}
                    key={i}
                >
                    <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        {item.length}
                    </a>
                </td>
            ))
        }

        if (props.filterType === "BY_STATUS") {
            return (
                <td
                    className={currentSquare}
                >
                    <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                        {value.length}
                    </a>
                </td>
            )
        }

        return Object.values(priority).map((item, i) => (
            <td
                className={item.length > 0 ? currentSquare : classes.square}
                key={i}
            >
                <a href="https://salambrosalam.atlassian.net/issues/?jql=project=SALAM">
                    {item.length}
                </a>
            </td>
        ))


    };

    //Свитч элемента по типу фильтра
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
                        {renderRow(props.BackLogBug.total)}
                    </tr>
                </table>

            )
    }

}

export default BoardElement;
