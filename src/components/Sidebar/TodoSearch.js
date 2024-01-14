import { useContext } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
          setSearchValue('');
        }}
      />
      <input
        id='searchBox'
        placeholder='Search...'
        className='sidebar__item__search-box hide'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        />
    </>
  )
}

export { TodoSearch }