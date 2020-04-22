import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Expansion = withStyles({
  root: {
    borderRadius: '0 !important',
  },
})(ExpansionPanel);

function CoronaFAQs(props) {
  const { question } = props;

  return (
    <Expansion>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{question.question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{question.answer}</Typography>
      </ExpansionPanelDetails>
    </Expansion>
  );
}

export default CoronaFAQs;
