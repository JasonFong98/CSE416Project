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
import MMDSummary from "./tabs/ensembleSummary/MMDSummary";
import SMDSummary from "./tabs/ensembleSummary/SMDSummary";
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
        <Box sx={{ paddingLeft: 3 }}>
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
        <GeneralInfo/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div id="smd-summary">
          SMD Ensemble Summary
        </div>
        <div id="smd-table">
          <SMDSummary />
        </div>
        <div id="mmd-summary">
          MMD Ensemble Summary
        </div>
        <div id="mmd-table">
          <MMDSummary />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
          <SamplePlansMenu />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoxAndWhiskers />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BarChart />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <img src={ohio_population} style={{ maxWidth: "600px" }} />
      </TabPanel>

    </Box>
  );
}
