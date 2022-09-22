import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('White', (parseInt(0.812*11799448,10)+" ("+81.2+"%)")),
  createData('Black/African American', (parseInt(0.132*11799448,10)+" ("+13.2+"%)")),
  createData('American Indian and Alaskan Native', (parseInt(0.003*11799448,10)+" ("+0.3+"%)")),
  createData('Asian', (parseInt(0.027*11799448,10)+" ("+2.7+"%)")),
  createData('Native Hawaiian and Pacific Islander', (parseInt(0.001*11799448,10)+" ("+0.01+"%)")),
  createData('Two or More Race', (parseInt(0.026*11799448,10)+" ("+2.6+"%)")),
  createData("",""),
  createData("Number of Districts","16"),
  createData("",""),
  createData("2020 Election Data",""),
  createData("Republican Percentage","53.3%"),
  createData("Democratic Percentage","45.2%"),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total Population</TableCell>
            <TableCell align="right">11,799,448</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}