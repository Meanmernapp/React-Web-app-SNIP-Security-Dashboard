import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../images/NavBar/ic-menu.svg'
import img2 from '../../images/SNIP-MEDIUM.png'
import { Image } from 'react-bootstrap'
import { SidebarData } from './SidebarData'
import { ListItemSecondaryAction } from '@material-ui/core'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <Image src={img2} className='snip_image' />
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    <Link to={item.path} className='nav-text'>{item.icon}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <Image
          className='display_image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-wq5bwwbn0cFhs2F4nWn1ZGgOrsNG3JKbQ&usqp=CAU'
        ></Image>
      </div>
    </>
  )
}

export default Navbar
