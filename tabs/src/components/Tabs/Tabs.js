import React from 'react';
import { Tab } from './Tab';

export const Tabs = props => {
  const { tabStyle, panels, changeActivePanel } = props;
  const isActiveClassName = (index) => {
    return props.activeTab === index ? 'tab-active' : '';
  }
  return (
    <div className="tabs" style={tabStyle(props)}>
      {panels.map((panel, i) => (
        <Tab key={i} isActive={isActiveClassName(i)} disabled={panel.disabled} changeActivePanel={() => changeActivePanel(i)}>
          {panel.label}
        </Tab>
      ))}
    </div>
  );
};
