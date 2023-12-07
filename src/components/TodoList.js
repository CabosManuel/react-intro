function TodoList(props) {

  return (
    <ul className="todos">
      {props.children}
    </ul>
  )
}

export { TodoList }