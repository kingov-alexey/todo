import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';

function App() {
  const [todoListItems, changeTodoListItems] = useState([
    'Задача 1',
    'Задача 2',
    'Задача 3',
    'Задача 4',
    'Задача 5',
  ]);

  //
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
      />

      <TasksList items={todoListItems} onRemove={removeHandler} taskText="Задача1" />

      <Footer
        copyright="(c) Korolyov Alexey"
        url="http://www.vkrg.kz/"
        urlText="Исходные файлы проекта"
      />
    </div>
  );
}

export default App;
