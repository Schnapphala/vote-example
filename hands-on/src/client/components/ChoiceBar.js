/**
 * Created by wittenberg on 20.08.16.
 */

import React from 'react';

export default function ChoiceBar({title, count, percent}) {
  return <div className="ChoiceBar">
    <div className="Progress" style={{'width': percent + '%'}}>{title}</div>
    <div className="ChoiceBarBadge">{count}</div>
  </div>;
}

ChoiceBar.propTypes = {
  title:    React.PropTypes.string.isRequired,
  count:    React.PropTypes.number.isRequired,
  percent:  React.PropTypes.number.isRequired
}