import React from 'react';

import css from './Task.module.css';
import BtnDelete from './BtnDelete/BtnDelete';

const Task = props => {
  console.log(props.text + props.onRemove);
  return (
    <li className={props.checked}>
      {props.taskText}
      {props.text}
      {/* asdfasdfasdf */}
      <BtnDelete onClick={props.onRemove.bind(null, props.id)} />
    </li>
  );
};
export default Task;
