import React, {useState, useEffect} from 'react'
import logo from "../assets/logo/webscript.png"
import {CgArrowLeftR, CgArrowRightR} from "react-icons/cg"
import {BsSearch} from "react-icons/bs"
import user from "../assets/user.jpg"
import MenuItem from './MenuItem'

const menuItems = [
    {name: "Dashboard", exact: true, to: "/", icon: "paper"},
    {name: "Content", exact: true, to: "/content", subMenus: [
        {name: "Courses", to: "/content/courses"}, {name: "Videos", to: "/content/videos"}
    ], icon: "dashboard"},
    {name: "Design", to: "/design", icon: "pen"}
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false)

    useEffect(() => {
      if (inactive) {
          document.querySelectorAll('.sub-menu').forEach((el) => {
              el.classList.remove('active')
          })
      }

      props.onCollapse(inactive)
    }, [inactive])

    return (
        <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="webscript" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                   {inactive ? <CgArrowLeftR />: <CgArrowRightR />}
                </div>
            </div>

            <div className="search-controller">
                <button className="search-btn">
                    <BsSearch />
                </button>

                <input type="text" placeholder="search" />
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem 
                                key={index} 
                                name={menuItem.name}
                                exact={menuItem.exact}
                                to={menuItem.to} 
                                icon={menuItem.icon}
                                subMenus={menuItem.subMenus || []} 
                                onClick={() => {
                                    if(inactive) {
                                        setInactive(false)
                                    }
                                }}
                                />
                        ))
                    }
                    {/* <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <AiFillDashboard />
                            </div>
                            <span>Dashboard</span></a>
                    </li>
                    <MenuItem name={"Content"} subMenus={[
                        {name: "Cources"},
                        {name: "Videos"}
                    ]} />
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <FaPenNib />
                            </div>
                            <span>Design</span>
                            </a>
                    </li> */}
                </ul>
            </div>
            <div className="side-menu-footer">
                <div className="avatar">
                    <img src={user} alt="user" />
                </div>
                <div className="user-info">
                    <h5>Ryuichi Ueda</h5>
                    <p>hsatlefp@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
