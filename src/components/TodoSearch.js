function TodoSearch(props) {
  return (
    <input
      placeholder='Search...'
      className='todo-search__text'
      value={props.searchValue}
      onChange={(event) => {
        props.setSearchValue(event.target.value);
      }}
     />
  )
}

export { TodoSearch }