import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import CustomTableHead from './CustomTableHead';

import { convertStrToDate } from '../../../services/utility';

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
  const { viewdonation, donations } = props;
  const [order] = React.useState('asc');
  const [orderBy] = React.useState('id');

  function handleOpendonationDetails(donation) {
    viewdonation(donation);
    props.history.push('/donation-details');
  }
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <CustomTableHead
          order={order}
          orderBy={orderBy}
          rowCount={donations.length}
        />
        <TableBody>
          {donations.map((donation) => {
            const donationName = `${donation.first_name} ${donation.last_name}`;
            const donationInitials = `${donation.first_name.charAt(0)}${donation.last_name.charAt(0)}`;
            return (
              <CustomTableRow hover key={donation.id}>
                <CustomTableCell onClick={() => handleOpendonationDetails(donation)}>
                  <div className="table-donation-name-container">
                    <div className="table-avatar-container">
                      <span>{donationInitials}</span>
                    </div>
                    {donationName}
                  </div>
                </CustomTableCell>
                <CustomTableCell onClick={() => handleOpendonationDetails(donation)}>
                  {donation.created_at && convertStrToDate(donation.created_at)}
                </CustomTableCell>
                <CustomTableCell onClick={() => handleOpendonationDetails(donation)}>
                  {donation.address ? donation.address : '_'}
                </CustomTableCell>
                <CustomTableCell onClick={() => handleOpendonationDetails(donation)}>{donation.status}</CustomTableCell>
                <CustomTableCell>{/* <donationActionsDropDown donation={donation} /> */}</CustomTableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DonationsTable;
