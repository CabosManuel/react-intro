import { useState } from 'react';

function TodoNew() {
  // React state (immutable)
  // [stateName, setStateFunctionName]
  const [newTaskValue, setNewTaskValue] = useState(''); // '' Initial value
  console.log('newTaskValue', newTaskValue);

  return (
    <input
      type="text"
      className="new-todo__text"
      placeholder="Add + new task..."
      value={newTaskValue} // <-- using state to show value
      onChange={
        (event) => {
          // console.log('Typing todo...');
          // console.log(event.target.value);
          setNewTaskValue(event.target.value);
        }
      }
    />
  )
}

export { TodoNew }