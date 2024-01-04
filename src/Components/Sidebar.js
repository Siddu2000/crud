import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import {FaList, FaUser} from 'react-icons/fa'
import {MdOutlineSettingsSuggest} from 'react-icons/md'
import {FaTable} from 'react-icons/fa6'


const Sidebar = () => {
    const [isOpen,setIsOpen]=useState(false);

    const handleTrigger=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            {/* < icon={isOpen ? faTimes : faBars} /> */}
            { !isOpen ? <IoMdMenu /> :<IoClose/>}
          </div>
            <div className="sidebar-position">
            <FaUser />
            <span>Home</span>
          </div>
          <div className="sidebar-position">
          <MdOutlineSettingsSuggest />
            <span>Menu Setting </span>
          </div>
          <div className="sidebar-position">
          <FaTable  />
            <span>Menu Table</span>
          </div>

          <div className="sidebar-position">
            {/* <FontAwesomeIcon icon={faList} /> */}
            <FaList/>
            <span>Menu List</span>
          </div>
          </div>
    </div>
  )
}

export default Sidebar