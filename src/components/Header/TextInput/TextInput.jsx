import React from 'react';
import css from './TextInput.module.css';

const TextInput = props => {
  // console.log('kkkkkkkkkkkkkkkkkkkk' + props.onChange);
  return (
    <div>
      <input type="text" placeholder={props.placeholder} onChange={props.onChange}></input>
    </div>
  );
};
export default TextInput;
