import {FC, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import '../styles/authorization-page.css';
import {useDispatch} from "react-redux";
import {login} from "../redux/actions/authAction";

export const Authorization: FC = () => {
    const dispatch = useDispatch<any>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const onChangeEmail = (value: string) => {
        setEmail(value);
    }
    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    const submitLogin = () => {
        if (email && password) {
            dispatch(login(email, password));
            return navigate('/home')
        } else {
            alert("Заполните все поля!");
        }
    }
    return (
        <div className='main'>
            <div>
                <input
                    value={email}
                    onChange={(e) => onChangeEmail(e.target.value)}
                    type="email"
                    placeholder='Логин'/>
            </div>
            <div>
                <input value={password}
                       onChange={(e) => onChangePassword(e.target.value)}
                       type="password"
                       placeholder='Пароль'/>
            </div>
            <button className='login-btn' onClick={() => submitLogin()}>Войти</button>
            <div><NavLink to={"/register"}>Зарегистрироваться</NavLink></div>
            <div><NavLink to={"/home"}>Продолжить как гость</NavLink></div>

        </div>
    )
}