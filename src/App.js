import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';

function App() {
  const [todoListItems, changeTodoListItems] = useState([]);

  //добавление задачи http://127.0.0.1:8000/api/task
  //изменение определнной задачи http://127.0.0.1:8000/api/task/2
  //удаление задачи определенной задачи http://127.0.0.1:8000/api/task/4

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/tasks');
      changeTodoListItems(response.data);
    };
    getTasks();
  }, []);

  //
  const [textInput, changeTextInput] = useState('');

  //
  const changeTextInputHandler = text => {
    changeTextInput(text);
  };

  //
  const createHandler = async () => {
    if (!textInput) {
      return;
    }
    const response = await axios.post('http://127.0.0.1:8000/api/task', {
      title: textInput,
    });

    const updatedListItems = [...todoListItems];
    updatedListItems.push({
      id: response.data.id,
      title: response.data.title,
    });
    changeTodoListItems(updatedListItems);
    changeTextInputHandler('');
  };

  //
  const removeHandler = async (id, event) => {
    event.stopPropagation();
    await axios.delete(`http://127.0.0.1:8000/api/task/${id}`);
    const updatedListItems = todoListItems.filter(item => {
      if (id === item.id) {
        return false;
      }
      return true;
    });

    changeTodoListItems(updatedListItems);
  };

  //
  const updateTaskStatus = async id => {
    await axios.put(`http://127.0.0.1:8000/api/task/${id}`, {
      status: !todoListItems.find(item => item.id === id).status,
    });
    const updatedTodoListItems = todoListItems.map(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    changeTodoListItems(updatedTodoListItems);
  };

  console.log(todoListItems);
  return (
    <div className="App">
      <Header
        text="ToDo"
        placeholder="Begin write task..."
        onChange={event => changeTextInputHandler(event.target.value)}
        onClickCreate={createHandler}
        inputValue={textInput}
      />

      <TasksList
        items={todoListItems}
        onRemove={removeHandler}
        onUpdateTaskStatus={updateTaskStatus}
      />

      <Footer
        copyright="(c) Korolyov Alexey"
        url="https://github.com/kingov-alexey/todo"
        urlText="Исходные файлы проекта"
      />
    </div>
  );
}

export default App;
