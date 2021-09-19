import React, {useState} from 'react'
import { BsNewspaper } from 'react-icons/bs';
import { AiFillDashboard } from 'react-icons/ai';
import { FaPenNib } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {

    const { name, subMenus, icon, onClick, to, exact} = props;
    const [expand, setExpand] = useState(false);

    return (
        <li onClick={onClick}>
            <NavLink exact to={to} onClick={() => setExpand(!expand)} className="menu-item">
                <div className="menu-icon">
                    {icon === 'paper' ? (
                        <BsNewspaper />
                    ): ''}
                    {icon === 'dashboard' ? (
                        <AiFillDashboard />
                    ): ''}
                    {icon === 'pen' ? (
                        <FaPenNib />
                    ): ''}
                </div>
                <span>{name}</span>
                </NavLink>
                {
                    subMenus && subMenus.length > 0 ?
                    (
                    <ul className={`sub-menu ${expand ? 'active' : ''}`}>
                        {subMenus.map((menu, index) => (
                        <li key={index}>
                            <NavLink to={menu.to}>{menu.name}</NavLink>
                        </li>))}
                    </ul>
                    ): null}
        </li>
    )
}

export default MenuItem
