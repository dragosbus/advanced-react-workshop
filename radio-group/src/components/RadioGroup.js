import React from 'react';

export class RadioGroup extends React.Component {
  state = {
    value: this.props.defaultValue
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isActive: this.state.value === child.props.value,
        onSelect: () => {
          this.setState({ value: child.props.value });
        }
      });
    });
    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {children}
      </fieldset>
    );
  }
}
