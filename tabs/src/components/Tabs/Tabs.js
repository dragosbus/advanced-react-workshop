import React from 'react';
import { Tab } from './Tab';

export const Tabs = props => {
  const { tabStyle, panels, changeActivePanel } = props;
  return (
    <div className="tabs" style={tabStyle(props)}>
      {panels.map((panel, i) => (
        <Tab key={i} disabled={panel.disabled} changeActivePanel={() => changeActivePanel(i)}>
          {panel.btn}
        </Tab>
      ))}
    </div>
  );
};
