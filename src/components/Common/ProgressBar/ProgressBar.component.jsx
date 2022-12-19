import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProgressBar.styles.scss';

const ProgressBar = ({size}) => (
  <div className="progress-bar">
    <CircularProgress size={size || 100} />
  </div>
)
 
export default ProgressBar;
