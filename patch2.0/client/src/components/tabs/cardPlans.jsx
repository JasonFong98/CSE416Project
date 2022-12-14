import React, {useEffect, useContext} from 'react';
import Paper from "@mui/material/Paper";
import { GlobalStoreContext } from "../../store/store";

function CardPlans(plan) {
    const {store}  = useContext(GlobalStoreContext);



    if(plan==""){
        return(<div></div>)
    }

    return (
        
        <Paper id="plan-summary" sx={{ display: "flex", flexDirection: "row" }} elevation={2}>
            <div>
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
                <div id = "paper-thirds">
                    <h4>State Dem/Rep Split:</h4>
                    <h2>{123}</h2>
                </div>
        </Paper>

    );
}

export default CardPlans;