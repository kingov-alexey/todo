import React, { useState } from 'react';

import css from './Task.module.css';
import BtnDelete from './BtnDelete/BtnDelete';

const Task = props => {
  //console.log('qqq' + props.checked);
  const [isChecked, changeIsChecked] = useState(false);

  const checkedHandler = () => {
    changeIsChecked(!isChecked);
  };

  return (
    <li className={isChecked ? 'checked' : ''} onClick={checkedHandler}>
      {props.taskText}
      {props.text}
      {/* asdfasdfasdf */}
      <BtnDelete onClick={props.onRemove.bind(null, props.id)} />
    </li>
  );
};
export default Task;
