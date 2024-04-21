import styled from "styled-components";
import avatar from "../../img/avatar.png"
import {menuItems} from "../../utils/menuItems.js";
import {signout} from "../../utils/icons.jsx";

const Navigation = () => {
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="avatar"/>
                <div className="text">
                    <h2>Arash</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {
                    menuItems.map(item => {
                        return (
                            <li key={item.id}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`

export default Navigation;