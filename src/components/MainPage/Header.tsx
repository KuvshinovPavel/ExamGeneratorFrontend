import {FC} from "react";
import "../../styles/header.css"
import {Profile} from "./Header/Profile";
import {Help} from "./Header/Help";
import {NavLink, useNavigate} from "react-router-dom";
import {ReactComponent as HelpIcon} from "../../assets/help.svg";
import {ReactComponent as ProfileIcon} from "../../assets/profile.svg";
import {User} from "../../redux/types/payloadDTO/user";

export interface HeaderProps{
    isAuth:boolean,
    user: User
}

export const Header: FC<HeaderProps> = (props) => {
   const {isAuth, user} = props
    const navigate = useNavigate();
    const onProfileClick=()=>{
    if (isAuth){
        navigate("/home/profile");
    }
    else {
        navigate("/");
    }
    }
    return (
        <div className="header">

            <div className="elems">
                <div><NavLink to="/home/help"><HelpIcon className="header-icon"/></NavLink></div>
                <NavLink className="header-title-navlink" to="/home"><span className="header-title"> ГЕНЕРАТОР ТЕСТОВ ОГЭ/ЕГЭ</span></NavLink>
                <div onClick={()=>onProfileClick()}><ProfileIcon className="header-icon"/></div>
            </div>
        </div>
    )
}
