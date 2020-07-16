import React from 'react';
import Task from './Task/Task';

const TasksList = props => {
  return (
    <ul>
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
