import { FaMagnifyingGlass } from "react-icons/fa6";

function TodoSearch(props) {
  return (
    <>
      <FaMagnifyingGlass
        id='sidebarItemSearchIcon'
        className="search-icon"
        onClick={() => {
          const sidebarItemSearchHighlight = document.getElementById('sidebarItemSearch');
          const sidebarItemSearchIcon = document.getElementById('sidebarItemSearchIcon');
          const searchBox = document.getElementById('searchBox');
          sidebarItemSearchHighlight.classList.toggle('hide');
          sidebarItemSearchIcon.classList.toggle('color__green');

          searchBox.classList.toggle('hide');
          props.setSearchValue('');
        }}
      />
      <input
        id='searchBox'
        placeholder='Search...'
        className='sidebar__item__search-box hide'
        value={props.searchValue}
        onChange={(event) => {
          // TODO: Mostrar mensaje cuando no encontró ninguna coincidencia
          props.setSearchValue(event.target.value);
        }}
        />
    </>
  )
}

export { TodoSearch }