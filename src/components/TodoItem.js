function TodoItem(props) {
  console.log(props);
  return (
    <li className="todos__item">
      <input
        className=""
        type="checkbox"
        // checked={props.completed}
      />
      <label className="">{props.title}</label>
      
    </li>
  );
}

export { TodoItem }
