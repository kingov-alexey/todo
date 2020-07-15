import React, { useState } from 'react';

import css from './Task.module.css';
import BtnDelete from './BtnDelete/BtnDelete';

const Task = props => {
  const checkedHandler = () => {
    props.onUpdateTaskStatus(props.id);
  };

  return (
    <li className={props.status ? 'checked' : ''} onClick={checkedHandler}>
      {props.taskText}
      {props.text}
      {/* asdfasdfasdf */}
      <BtnDelete onClick={props.onRemove.bind(null, props.id)} />
    </li>
  );
};
export default Task;
