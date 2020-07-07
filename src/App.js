import React, { useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';

function App() {
  const [todoListItems, changeTodoListItems] = useState([
    { id: '01', text: 'задача 1' },
    { id: '02', text: 'задача 2' },
    { id: '03', text: 'задача 3' },
    { id: '04', text: 'задача 4' },
    { id: '05', text: 'задача 5' },
    { id: '06', text: 'задача 6' },
  ]);

  //Очистка текст импут
  const [textInput, changeTextInput] = useState('');

  //
  const changeTextInputHandler = text => {
    changeTextInput(text);
  };

  //
  const createHandler = () => {
    if (!textInput) {
      return;
    }
    const updatedListItems = [...todoListItems];
    updatedListItems.push(textInput);
    changeTodoListItems(updatedListItems);
    changeTextInputHandler('');
  };

  //
  const removeHandler = id => {
    const updatedListItems = todoListItems.filter((item, index) => {
      if (id === index) {
        return false;
      }
      return true;
    });

    changeTodoListItems(updatedListItems);
  };

  //
  const removeAllHandler = () => {
    changeTodoListItems([]);
  };
  return (
    <div className="App">
      <Header
        text="ToDo"
        onClickClear={removeAllHandler}
        placeholder="Begin write task..."
        onChange={event => changeTextInputHandler(event.target.value)}
        onClickCreate={createHandler}
        inputValue={textInput}
      />

      <TasksList items={todoListItems} onRemove={removeHandler} />

      <Footer
        copyright="(c) Korolyov Alexey"
        url="https://github.com/kingov-alexey/todo"
        urlText="Исходные файлы проекта"
      />
    </div>
  );
}

export default App;
