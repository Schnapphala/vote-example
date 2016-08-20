/**
 * Created by wittenberg on 20.08.16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ChoiceBar from './components/ChoiceBar';

ReactDOM.render(
  <ChoiceBar title="Javascript" count={123} percent={37} />,
  document.getElementById('voteAppMountPoint')
);