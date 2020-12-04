import React from "react";
import DefaultBoard from "./DefaultBoard";
import TypeBoard from "./TypeBoard";
import StatusBoard from "./StatusBoard";

const SwitchTables = (props) => {
    switch(props.filter){
        case "DEFAULT":
            return <DefaultBoard filter={props.filter} sortDefaultFunction={props.sortDefaultFunction}/>
        case "BY_TYPES":
           return <TypeBoard filter="DEFAULT" sortByTypesFunction={props.sortByTypesFunction}/>
        case "BY_STATUS":
            return <StatusBoard filter={props.filter} sortStateByStatus={props.sortStateByStatus} />
    }
}

export default SwitchTables;
