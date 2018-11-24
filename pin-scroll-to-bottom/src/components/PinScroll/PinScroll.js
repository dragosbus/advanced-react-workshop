import React, { Component } from 'react';

export default class PinScrollToBottom extends Component {
  scrollToBottom = () => {
    const { scrollHeight } = document.documentElement;

    if (!this.scrolledUp) {
      window.scrollTo(0, scrollHeight);
    }
  };

  componentWillUpdate() {
    const { scrollHeight, clientHeight, scrollTo } = document.documentElement;
    this.scrolledUp = scrollTo + clientHeight < scrollHeight;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return this.props.children;
  }
}
