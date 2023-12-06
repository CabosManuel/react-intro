function TodoList(props) {
  console.log(props);

  return (
    <ul>
      {props.children}
    </ul>
  )
}

export { TodoList }