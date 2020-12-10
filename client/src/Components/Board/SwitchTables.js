import React from "react";
import DefaultBoard from "./DefaultBoard";
import TypeBoard from "./TypeBoard";
import StatusBoard from "./StatusBoard";

const SwitchTables = (props) => {
    switch(props.filter){
        case "DEFAULT":
            return <DefaultBoard
                user={props.user}
                filter={props.filter}
                sortDefaultFunction={props.sortDefaultFunction}
                type={props.type}
                status={props.status}
            />
        case "BY_TYPES":
           return <TypeBoard
               filter={props.filter}
               sortByTypesFunction={props.sortByTypesFunction}
               type={props.type}
               user={props.user}/>
        case "BY_STATUS":
            return <StatusBoard
                filter={props.filter}
                sortStateByStatus={props.sortStateByStatus}
                user={props.user}
                status={props.status}/>
        default:
            return <DefaultBoard
            user={props.user}
            filter={props.filter}
            sortDefaultFunction={props.sortDefaultFunction}
            type={props.type}
            status={props.status}
        />
    }
}

export default SwitchTables;
