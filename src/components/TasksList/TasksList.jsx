import React from 'react';
import css from './TasksList.module.css';
import Task from './Task/Task';

const TasksList = props => {
  return (
    <ul>
      {/* <Task checked="checked" taskText={props.taskText} />
      <Task checked=" " taskText={props.taskText} /> */}

      {props.items.map(item => {
        return (
          <Task
            key={item.id}
            text={item.title}
            id={item.id}
            onRemove={props.onRemove}
            status={item.status}
            onUpdateTaskStatus={props.onUpdateTaskStatus}
          />
        );
      })}
    </ul>
  );
};
export default TasksList;
