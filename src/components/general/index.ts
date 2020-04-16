import { withStyles, Button } from '@material-ui/core';

export const DropDownButton = withStyles({
  root: {
    cursor: 'pointer',
    color: '#fff',
    '&.MuiButton-root': {
      border: '1px solid white',
      padding: '10px',
      borderRadius: '4px',
    },
    '& .item-label': {
      color: '#fff',
      textTransform: 'capitalize',
    },
  },
})(Button);
