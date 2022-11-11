import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ohio_population from "../imgs/ohio-population.png";

import Table from "./tables/Table";
import BoxAndWhiskers from "./graphs/boxAndWhiskers";
import BarChart from "./graphs/barChart";
import MMDSummaryTable from "./tables/MMDSummaryTable";
import SMDSummaryTable from "./tables/SMDSummaryTable";
import SamplePlansMenu from "./tabs/samplePlansMenu"
import GeneralInfo from "./tabs/generalInfo";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#E8F4F8",
        display: "flex",
        marginTop: "1%",
        height: "100%",
      }}
    >
      <Tabs
        id="vertical-tab"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider"}}
      >
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="General Information" {...a11yProps(0)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Ensemble Summary" {...a11yProps(1)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Sample District Plans" {...a11yProps(2)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Box & Whisker Plot" {...a11yProps(3)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Political Split" {...a11yProps(4)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Population Equality" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* <Table /> */}
        <GeneralInfo/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div id="smd-summary">
          SMD Ensemble Summary
        </div>
        <div id="smd-table">
          <SMDSummaryTable />
        </div>
        <div id="mmd-summary">
          MMD Ensemble Summary
        </div>
        <div id="mmd-table">
          <MMDSummaryTable />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
          <SamplePlansMenu />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoxAndWhiskers />
        <h4 style={{ paddingTop: "10%" }}>
          SMD:<br></br>Number of Majority-Minority Districts: 2<br></br>Wasted
          Minority Votes: 20%
        </h4>
        <br></br>
        <h4>
          MMD:<br></br>Number of Majority-Minority Districts: 5<br></br>Wasted
          Minority Votes: 10%
        </h4>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BarChart />
        <h4 style={{ paddingTop: "10%" }}>
          Get voter registration and past election data to find out
          <br /> what percentage of the state is Democratic/Republican.
          <br /> The number of Republican/Democratic seats should be
          <br /> proportional to the data
        </h4>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <img src={ohio_population} style={{ maxWidth: "600px" }} />
      </TabPanel>

    </Box>
  );
}
