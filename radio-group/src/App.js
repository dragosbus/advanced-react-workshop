import React, { Component } from 'react';
import { RadioGroup } from './components/RadioGroup';
import { RadioButton } from './components/RadioButton';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaForward } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RadioGroup legend='Radio Group'>
          <RadioButton value='back'>
            <FaBackward />
          </RadioButton>
          <RadioButton value='play'>
            <FaPlay />
          </RadioButton>
          <RadioButton value='pause'>
            <FaPause />
          </RadioButton>
          <RadioButton value='forward'>
            <FaForward />
          </RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

export default App;
