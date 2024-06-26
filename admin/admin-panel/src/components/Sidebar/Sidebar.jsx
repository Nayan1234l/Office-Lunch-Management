import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src={assets.add_icon} alt="add-icon" />
                    <p>Add Menu</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img src={assets.order_icon} alt="add-icon" />
                    <p>List Menu</p>
                </NavLink>
                <NavLink to='/view' className="sidebar-option">
                    <img src={assets.add_icon} alt="add-icon" />
                    <p>View Chosen Menu</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar