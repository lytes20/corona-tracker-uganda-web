import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
  { id: 'name', numeric: false, label: 'Donner Name' },
  { id: 'cash-donation', numeric: false, label: 'Cash Donation' },
  { id: 'other-donations', numeric: false, label: 'Other Donations' },
];

function CustomTableHead(props) {
  const { order, orderBy } = props;

  return (
    <TableHead>
      <TableRow style={{ borderBottom: '1px solid gray' }}>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="left" sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
