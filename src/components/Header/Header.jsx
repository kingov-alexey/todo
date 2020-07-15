import React from 'react';
import css from './Header.module.css';
import TextInput from './TextInput/TextInput';
import AddBtn from './AddBtn/AddBtn';

const Header = props => {
  return (
    <div className={css.header}>
      <h1>{props.text}</h1>
      <TextInput
        placeholder={props.placeholder}
        onChange={props.onChange}
        inputValue={props.inputValue}
      />
      <AddBtn text="ADD" onClick={props.onClickCreate} />
    </div>
  );
};
export default Header;
