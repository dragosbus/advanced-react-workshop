import React from 'react';

export const Panel = props => {
  return (
    <div className="panel">
      {props.render}
    </div>
  );
};