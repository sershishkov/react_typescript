import React, { FC } from 'react';
import { I_Todo } from '../types/types';
interface I_TodoItemProps {
  todo: I_Todo;
}

const TodoItem: FC<I_TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <div style={{ padding: 15, border: '1px solid grey' }}>
        <input type='checkbox' checked={todo.completed} />
        {todo.id} {todo.title}
      </div>
    </div>
  );
};

export default TodoItem;
