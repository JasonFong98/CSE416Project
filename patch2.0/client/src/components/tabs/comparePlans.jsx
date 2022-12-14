import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import api from "../../api/api"

export default function ComparePlans(data) {
    console.log(data)
    const [mmdOne, setmmdOne] = useState(data.mmdData[0].type);
    const [mmdTwo, setmmdTwo] = useState(data.mmdData[1].type);
    const [planAlignment, setPlanAlignment] = useState(mmdOne);
    const handlePlanChange = (event, newPlanAlignment) => {
        setPlanAlignment(newPlanAlignment);
      };

    return (
    <div>
        <div id="smd-summary">
          SMD Ensemble Summary
        </div>
        <Box id="smd-table"
            sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,
                width: 450,
                height: 335,
            },
            }}
        >
            <Paper id="summary-block" elevation={2}>
            <div id="summary-names">
                <p>Number of District Plans</p>
                <hr/>
                <p>Average Population per District</p>
                <hr/>
                <p>Average White Population per District</p>
                <hr/>
                <p>Average Black/African Population per District</p>
                <hr/>
                <p>Average Asian Population per District</p>
                <hr/>
                <p>Average Latino Population per District</p>
                <hr/>
                <p>Average Majority-minority Representatives per Plan</p>
                <hr/>
                <p>Average Republican/Democratic Split</p>
                <hr/>
                <p>Average Polsby-popper Value</p>
            </div>
            <div id="summary-data">
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
            </div>
            </Paper>
        </Box>
        <div id="mmd-summary">
            MMD Ensemble Summary
        </div>
        <Box id="mmd-table"
            sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
                m: 1,
                width: 450,
                height: 335,
            },
            }}
        >
            <Paper id="summary-block" elevation={2}>
            <div id="summary-names">
                <p>Number of District Plans</p>
                <hr/>
                <p>Average Population per District</p>
                <hr/>
                <p>Average White Population per District</p>
                <hr/>
                <p>Average Black/African Population per District</p>
                <hr/>
                <p>Average Asian Population per District</p>
                <hr/>
                <p>Average Latino Population per District</p>
                <hr/>
                <p>Average Majority-minority Representatives per Plan</p>
                <hr/>
                <p>Average Republican/Democratic Split</p>
                <hr/>
                <p>Average Polsby-popper Value</p>
            </div>
            <div id="summary-data">
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <hr id="line"/>
                <p>1</p>
                <hr id="line"/>
                <p>1</p>
            </div>
            </Paper>
        </Box>
        <ToggleButtonGroup
            style={{position:"relative", left:"155%", paddingBottom:"2%"}}
            color="warning"
            value={planAlignment}
            exclusive
            onChange={handlePlanChange}
            size="medium"
            aria-label="Platform"
        >
            <ToggleButton value={mmdOne}><b>{mmdOne}</b></ToggleButton>
            <ToggleButton value={mmdTwo}><b>{mmdTwo}</b></ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}