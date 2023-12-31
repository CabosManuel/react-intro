function SidebarItem(props) {
  return (
    <div className='sidebar__item'>
      {props.children}
      <div
        id='sidebarItemSearch'
        className='sidebar__item__highlight hide'
      ></div>
    </div>
  )
}

export { SidebarItem }