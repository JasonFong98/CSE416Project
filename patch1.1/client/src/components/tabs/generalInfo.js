import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function GeneralInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 850,
          height: 250,
        },
      }}
    >
      <Paper id="demo-card" elevation={2}>
        <h3>Demographic</h3>
      </Paper>
    </Box>
  );
}

export default GeneralInfo;
