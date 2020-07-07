import React from 'react';
import css from './TasksList.module.css';
import Task from './Task/Task';

const TasksList = props => {
  return (
    <ul>
      {/* <Task checked="checked" taskText={props.taskText} />
      <Task checked=" " taskText={props.taskText} /> */}

      {props.items.map((item, index) => {
        return <Task key={item.id} text={item.text} id={item.id} onRemove={props.onRemove} />;
      })}
    </ul>
  );
};
export default TasksList;
