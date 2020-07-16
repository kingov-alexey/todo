import React from 'react';
import BtnDelete from './BtnDelete/BtnDelete';

//обновление статуса задачи
const Task = props => {
  const checkedHandler = () => {
    props.onUpdateTaskStatus(props.id);
  };

  return (
    <li className={props.status ? 'checked' : ''} onClick={checkedHandler}>
      {props.taskText}
      {props.text}

      <BtnDelete onClick={props.onRemove.bind(null, props.id)} />
    </li>
  );
};
export default Task;
