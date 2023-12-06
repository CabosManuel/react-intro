function TodoItem(props) {
  console.log(props);
  return (
    <li>
      <span>-</span>
      <p>{props.title}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem }
