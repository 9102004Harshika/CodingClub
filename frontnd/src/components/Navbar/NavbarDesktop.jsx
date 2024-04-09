import React from 'react'
import './NavbarDesktop.css'
import {FaBiohazard, FaBookSkull, FaChevronDown, FaComputer} from 'react-icons/fa6'
import {MdAddCall} from 'react-icons/md'
import {IoIosHome} from 'react-icons/io'
import {GrOrganization} from 'react-icons/gr'
import {PiSignInBold} from "react-icons/pi"

const NavbarDesktop = () => {
  return (
    <>
    <div className="navbar">
      <div className="left">
        <span><FaBiohazard/>TcscClub</span>
      </div>
      <div className="center">
        <ul>  
          <li><IoIosHome/>Home</li>
          <li><FaBookSkull/>Projects<FaChevronDown/></li>
          <li><FaComputer/>Events<FaChevronDown/></li>
          <li><GrOrganization/>About</li>
          <li><MdAddCall/>Contact</li>
        </ul>
      </div>
      <div className="right">
        <span><PiSignInBold/>SignIn</span>
      </div>
    </div>
    </>
  )
}

export default NavbarDesktop