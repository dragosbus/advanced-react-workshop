import React, { Component } from 'react';
import PinScrollToBottom from './components/PinScroll/PinScroll';
import { UserList } from './components/UserList/UserList';
import './App.css';

class App extends Component {
  state = {
    users: []
  };

  fetchUsers = () => fetch('https://randomuser.me/api/').then(res => res.json());

  fetchAndSetState = () => {
    this.fetchUsers().then(res => {
      this.setState(prevState => ({
        users: prevState.users.concat(res.results[0])
      }));
    });
  };

  componentDidMount() {
    this.int = setInterval(() => {
      this.fetchAndSetState();
    }, 5000);
  }

  componentDidUpdate() {
    if(this.state.users.length > 20) {
      clearInterval(this.int);
    }
  }

  render() {
    return (
      <div className="App">
        <PinScrollToBottom>
          <UserList users={this.state.users} />
        </PinScrollToBottom>
      </div>
    );
  }
}

export default App;
