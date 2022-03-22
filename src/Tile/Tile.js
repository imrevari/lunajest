import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Tile({ element }) {
  const { image, name, species, gender, origin } = element;
  //   const TableCell = withStyles({
  //     root: {
  //       borderBottom: 'none'
  //     }
  //   })(MuiTableCell);
  return (
    <div>
      <img src={image} />

      <Table
        sx={{
          maxWidth: 250,
          borderBottom: 'none',
          borderTop: 'none'
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <h4>Name</h4>
            </TableCell>
            <TableCell align="left">{name}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left">
              <h4>Species</h4>
            </TableCell>
            <TableCell align="left">{species}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left">
              <h4>Gender</h4>
            </TableCell>
            <TableCell align="left">{gender}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left">
              <h4>Origin</h4>
            </TableCell>
            <TableCell align="left">{origin.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Tile;
