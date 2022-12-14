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
    const [summary, setSummary] = useState({ 
        "Splits" : data.averageMMDData[0].split,
        "OppurtunityRepresentatives" : data.averageMMDData[0].numberOfMajorityMinority,
        "RepublicanVoteShare" : (Number(data.averageMMDData[0].numberOfRepublican)/(Number(data.averageMMDData[0].numberOfDemocrat)+Number(data.averageMMDData[0].numberOfRepublican))*100).toString().substring(0,5),
        "DemocraticVoteShare" : (Number(data.averageMMDData[0].numberOfDemocrat)/(Number(data.averageMMDData[0].numberOfDemocrat)+Number(data.averageMMDData[0].numberOfRepublican))*100).toString().substring(0,5),
        "RepublicanSeatShare" : ((Number(data.averageMMDData[0].split.split('|')[1])/(Number(data.averageMMDData[0].split.split('|')[0])+Number(data.averageMMDData[0].split.split('|')[1])))*100).toString().substring(0,5),
        "DemocraticSeatShare" : ((Number(data.averageMMDData[0].split.split('|')[0])/(Number(data.averageMMDData[0].split.split('|')[0])+Number(data.averageMMDData[0].split.split('|')[1])))*100).toString().substring(0,5),
    });
    const [enactedSummary, setEnactedSummary] = useState({ 
        "Splits" : data.enactedSummaryData.split,
        "OppurtunityRepresentatives" : data.enactedSummaryData.numberOfMajorityMinority,
        "RepublicanVoteShare" : (Number(data.enactedSummaryData.numberOfRepublican)/(Number(data.enactedSummaryData.numberOfDemocrat)+Number(data.enactedSummaryData.numberOfRepublican))*100).toString().substring(0,5),
        "DemocraticVoteShare" : (Number(data.enactedSummaryData.numberOfDemocrat)/(Number(data.enactedSummaryData.numberOfDemocrat)+Number(data.enactedSummaryData.numberOfRepublican))*100).toString().substring(0,5),
        "RepublicanSeatShare" : ((Number(data.enactedSummaryData.split.split('|')[1])/(Number(data.enactedSummaryData.split.split('|')[0])+Number(data.enactedSummaryData.split.split('|')[1])))*100).toString().substring(0,5),
        "DemocraticSeatShare" : ((Number(data.enactedSummaryData.split.split('|')[0])/(Number(data.enactedSummaryData.split.split('|')[0])+Number(data.enactedSummaryData.split.split('|')[1])))*100).toString().substring(0,5),
    });
    const handlePlanChange = (event, newPlanAlignment) => {
        if (newPlanAlignment==mmdOne) {
          setSummary({
            "Splits" : data.averageMMDData[0].split,
            "OppurtunityRepresentatives" : data.averageMMDData[0].numberOfMajorityMinority,
            "RepublicanVoteShare" : (Number(data.averageMMDData[0].numberOfRepublican)/(Number(data.averageMMDData[0].numberOfDemocrat)+Number(data.averageMMDData[0].numberOfRepublican))*100).toString().substring(0,5),
            "DemocraticVoteShare" : (Number(data.averageMMDData[0].numberOfDemocrat)/(Number(data.averageMMDData[0].numberOfDemocrat)+Number(data.averageMMDData[0].numberOfRepublican))*100).toString().substring(0,5),
            "RepublicanSeatShare" : ((Number(data.averageMMDData[0].split.split('|')[1])/(Number(data.averageMMDData[0].split.split('|')[0])+Number(data.averageMMDData[0].split.split('|')[1])))*100).toString().substring(0,5),
            "DemocraticSeatShare" : ((Number(data.averageMMDData[0].split.split('|')[0])/(Number(data.averageMMDData[0].split.split('|')[0])+Number(data.averageMMDData[0].split.split('|')[1])))*100).toString().substring(0,5),
    })
        }
        else if(newPlanAlignment==mmdTwo) {
          setSummary({
          "Splits" : data.averageMMDData[1].split,
          "OppurtunityRepresentatives" : data.averageMMDData[1].numberOfMajorityMinority,
          "RepublicanVoteShare" : (Number(data.averageMMDData[1].numberOfRepublican)/(Number(data.averageMMDData[1].numberOfDemocrat)+Number(data.averageMMDData[1].numberOfRepublican))*100).toString().substring(0,5),
          "DemocraticVoteShare" : (Number(data.averageMMDData[1].numberOfDemocrat)/(Number(data.averageMMDData[1].numberOfDemocrat)+Number(data.averageMMDData[1].numberOfRepublican))*100).toString().substring(0,5),
          "RepublicanSeatShare" : ((Number(data.averageMMDData[1].split.split('|')[1])/(Number(data.averageMMDData[1].split.split('|')[0])+Number(data.averageMMDData[1].split.split('|')[1])))*100).toString().substring(0,5),
          "DemocraticSeatShare" : ((Number(data.averageMMDData[1].split.split('|')[0])/(Number(data.averageMMDData[1].split.split('|')[0])+Number(data.averageMMDData[1].split.split('|')[1])))*100).toString().substring(0,5),
      })
        }
        else {
          setSummary({
            "Splits" : null,
            "OppurtunityRepresentatives" : null,
            "RepublicanVoteShare" : null,
            "DemocraticVoteShare" : null,
            "RepublicanSeatShare" : null,
            "DemocraticSeatShare" : null,
          })
        }
        setPlanAlignment(newPlanAlignment);
      };

    return (
    <div>
        <div id="smd-summary">
            &nbsp;&nbsp;&nbsp;&nbsp;Enacted District Plan
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
                <p>Democratic/Republican Splits</p>
                <hr/>
                <p>Oppurtunity Representatives</p>
                <hr/>
                <p>Republican Vote Share</p>
                <hr/>
                <p>Democratic Vote Share</p>
                <hr/>
                <p>Republican Seat Share</p>
                <hr/>
                <p>Democratic Seat Share</p>
            </div>
            <div id="summary-data">
                <p>{enactedSummary.Splits}</p>
                <hr id="line"/>
                <p>{enactedSummary.OppurtunityRepresentatives}</p>
                <hr id="line"/>
                <p>{enactedSummary.RepublicanVoteShare}%</p>
                <hr id="line"/>
                <p>{enactedSummary.DemocraticVoteShare}%</p>
                <hr id="line"/>
                <p>{enactedSummary.RepublicanSeatShare}%</p>
                <hr id="line"/>
                <p>{enactedSummary.DemocraticSeatShare}%</p>
            </div>
            </Paper>
        </Box>
        <div id="mmd-summary">
        Average MMD District Plan
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
                <p>Democratic/Republican Splits</p>
                <hr/>
                <p>Oppurtunity Representatives</p>
                <hr/>
                <p>Republican Vote Share</p>
                <hr/>
                <p>Democratic Vote Share</p>
                <hr/>
                <p>Republican Seat Share</p>
                <hr/>
                <p>Democratic Seat Share</p>
            </div>
            <div id="summary-data">
                <p>{summary.Splits}</p>
                <hr id="line"/>
                <p>{summary.OppurtunityRepresentatives}</p>
                <hr id="line"/>
                <p>{summary.RepublicanVoteShare}%</p>
                <hr id="line"/>
                <p>{summary.DemocraticVoteShare}%</p>
                <hr id="line"/>
                <p>{summary.RepublicanSeatShare}%</p>
                <hr id="line"/>
                <p>{summary.DemocraticSeatShare}%</p>
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