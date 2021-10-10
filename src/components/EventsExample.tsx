import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, set_value] = useState<string>('');
  const [isDrag, set_isDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_value(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {};

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    set_isDrag(false);
    console.log('DROP');
    e.dataTransfer.files.item(1);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    set_isDrag(false);
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    set_isDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type='text'
        placeholder='Управляемый'
      />
      <input ref={inputRef} type='text' placeholder='Не Управляемый' />
      <button onClick={clickHandler}>Кнопка</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: 'red' }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
