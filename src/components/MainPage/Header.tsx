import {FC} from "react";
import "../../styles/header.css"
import {Profile} from "./Header/Profile";
import {Help} from "./Header/Help";
import {NavLink} from "react-router-dom";
import {ReactComponent as HelpIcon} from "../../assets/help.svg";
import {ReactComponent as ProfileIcon} from "../../assets/profile.svg";

export const Header: FC = () => {

    return (
        <div className="header">

            <div className="elems">
                <div><NavLink to="/home/help"><HelpIcon className="header-icon"/></NavLink></div>
                <NavLink className="header-title-navlink" to="/home"><span className="header-title"> ГЕНЕРАТОР ТЕКСТОВ ОГЭ/ЕГЭ</span></NavLink>
                <div><NavLink to="/home/profile"><ProfileIcon className="header-icon"/></NavLink></div>
            </div>
        </div>
    )
}