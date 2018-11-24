import React, { Component } from 'react';
import { FaCar } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { FaSpaceShuttle } from 'react-icons/fa';
import { Tabs } from './components/Tabs/Tabs';
import { Panel } from './components/Panel/Panel';
import * as text from './text';
import './App.css';

const panels = [
  {
    btn: <FaCar />,
    disabled: false,
    panel: text.cars
  },
  {
    btn: <FaBed />,
    disabled: false,
    panel: text.hotels
  },
  {
    btn: <FaPlane />,
    disabled: false,
    panel: text.flights
  },
  {
    btn: <FaSpaceShuttle />,
    disabled: false,
    panel: text.space
  }
];

const TabsStyle = props => ({
  width: '100%',
  padding: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  order: props.toBottom ? 1 : 0,
  [props.toBottom ? ['borderTop'] : ['borderBottom']]: '1px solid rgba(2,2,2,0.15)'
});

class App extends Component {
  state = {
    activeTab: 0,
    toBottom: false
  };

  changeActivePanel = id => {
    this.setState({ activeTab: id });
  };

  renderPanel = () => {
    const currentPanel = panels[this.state.activeTab].panel;
    return <Panel render={currentPanel} />;
  };

  render() {
    return (
      <div className="App">
        <Tabs
          {...this.state}
          changeActivePanel={this.changeActivePanel}
          text={text}
          tabStyle={TabsStyle}
          panels={panels}
        />
        {this.renderPanel()}
      </div>
    );
  }
}

export default App;
