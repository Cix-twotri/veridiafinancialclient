import React from 'react';

import { InputContainer, StyledInput, Button } from './NumberInput.styles'; // Adjust the import path as necessary

class NumberInput extends React.Component {
  handleChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/^\$/, '');
    if (!isNaN(formattedValue) && formattedValue <= this.props.max) {
      this.props.onChange(value);
    }
  };

  increment = () => {
    const newValue = (parseFloat(this.props.value) + 1).toFixed(2);
    this.props.onChange(newValue);
  };

  decrement = () => {
    const newValue = (parseFloat(this.props.value) - 1).toFixed(2);
    this.props.onChange(newValue);
  };

  render() {
    const { value } = this.props;
    return (
      <InputContainer>
        <StyledInput
          type="text"
          value={`$${value}`}
          onChange={this.handleChange}
        />
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </InputContainer>
    );
  }
}

export default NumberInput;