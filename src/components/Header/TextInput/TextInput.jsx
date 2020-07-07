import React from 'react';
import css from './TextInput.module.css';

const TextInput = props => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.inputValue}
      />
    </div>
  );
};
export default TextInput;
