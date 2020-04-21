import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import CustomTableHead from './CustomTableHead';

export const CustomTableRow = withStyles({
  root: {
    cursor: 'pointer',
    padding: '20px 10px',
  },
})(TableRow);

export const CustomTableCell = withStyles({
  root: {
    cursor: 'pointer',
    padding: '20px 10px',
    border: 'none',
  },
})(TableCell);

function DonationsTable(props) {
  const { donations } = props;
  const [order] = React.useState('asc');
  const [orderBy] = React.useState('id');

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <CustomTableHead order={order} orderBy={orderBy} rowCount={donations.length} />
        <TableBody>
          {donations.map((donation) => {
            return (
              <CustomTableRow key={donation.name}>
                <CustomTableCell>
                  <div className="table-donation-name-container">{donation.name}</div>
                </CustomTableCell>
                <CustomTableCell>{donation.cash_donation}</CustomTableCell>
                <CustomTableCell>{donation.other_donation}</CustomTableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DonationsTable;
