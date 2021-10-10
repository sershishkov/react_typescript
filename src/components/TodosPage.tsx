import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { I_Todo } from '../types/types';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const TodosPage: FC = () => {
  const [todos, set_todos] = useState<I_Todo[]>([]);

  useEffect(() => {
    getAll__Todos();
  }, []);

  async function getAll__Todos() {
    try {
      const response = await axios.get<I_Todo[]>(
        `https://jsonplaceholder.typicode.com/Todos`
      );
      set_todos(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: I_Todo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
