import React from 'react';
import { Tab } from './Tab';

export const Tabs = props => {
  const { tabStyle, createPanelsHandler, text, changeActivePanel } = props;
  return (
    <div className="tabs" style={tabStyle(props)}>
      {createPanelsHandler(text).map((panel, i) => (
        <Tab key={i} changeActivePanel={() => changeActivePanel(i)}>
          {panel.btn}
        </Tab>
      ))}
    </div>
  );
};
