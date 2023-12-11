function TodoNew() {
  return (
    <input
      type="text"
      className="new-todo__text"
      placeholder="Add + new task..."
      onChange={
        (event) => {
          console.log('Typing todo...');
          console.log(event.target.value);
        }
      }
    />
  )
}

export { TodoNew }