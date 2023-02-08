import React from 'react'
import img1 from '../../images/NavBar/gauge-solid.svg'
import img2 from '../../images/NavBar/magnifying-glass-chart-solid.svg'
import img3 from '../../images/NavBar/users-solid.svg'
import img4 from '../../images/NavBar/book-solid.svg'
import { Image } from 'react-bootstrap'

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <i class="fa-solid fa-magnifying-glass-chart" style={{color: 'green', backgroundColor: '#70707',
        width: '4.375em !important'}}></i>,
        cName: 'nav-text'
    },
    {
        title:'Users',
        path:'/users',
        icon: <i class="fa-solid fa-users" style={{color: 'green',}}></i>,
        cName: 'nav-text'
    }
]
