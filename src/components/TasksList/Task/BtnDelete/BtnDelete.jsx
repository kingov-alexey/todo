import React from 'react';
import css from './BtnDelete.module.css';

const BtnDelete = props => {
  return (
    <div>
      <span onClick={props.onClick} className={css.delete}>
        ×
      </span>
    </div>
  );
};

export default BtnDelete;
