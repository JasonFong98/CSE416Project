import React, {useEffect, useContext} from 'react';
import Paper from "@mui/material/Paper";
import { GlobalStoreContext } from "../../store/store";

function CardPlans(props) {
    const {store}  = useContext(GlobalStoreContext);
    const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
    console.log(stateDict[props.state.state]);
    console.log(props);

    useEffect(()=>{
        store.setStateMap(props.value);
    },[props.value]);

    if(props.value==""){
        return(<div></div>)
    }

    return (
        <div>
            <Paper id="plan-summary" elevation={2}>
                <div className="flex-container">
                    <div id="paper-thirds">
                        <h4>Number of District:</h4>
                        <h2>{123}</h2>
                    </div>
                    
                    <div id = "paper-thirds">
                        <h4>Opportunity Districts:</h4>
                        <h2>{123}</h2>
                    </div>

                    <div id = "paper-thirds">
                        <h4>State Dem/Rep Split:</h4>
                        <h2>{123}</h2>
                    </div>
                </div>
                <div className="flex-container">
                    <div id = "paper-thirds">
                        <h4>Safe Districts:</h4>
                        <h2>{123}</h2>
                    </div>
                    <div id = "paper-thirds">
                        <h4>Threshhold for Opportunity District:</h4>
                        <h2>{123}</h2>
                    </div>
                </div>
            </Paper>
            <Paper id="plan-summary" elevation={2}>

            </Paper>
        </div>
    );
}

export default CardPlans;