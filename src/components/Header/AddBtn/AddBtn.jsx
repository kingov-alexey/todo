import React from 'react';
import css from './AddBtn.module.css';

const AddBtn = props => {
  return (
    <div>
      <span className={css.addBtn} onClick={props.onClick}>
        {props.text}
      </span>
    </div>
  );
};
export default AddBtn;
