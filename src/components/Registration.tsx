import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../redux/actions/authAction";
import '../styles/authorization-page.css';
export const Registration: FC = () => {
    const dispatch = useDispatch<any>();
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const navigate = useNavigate();

    const onChangeEmail = (value: string) => {
        setEmail(value);
    }
    const onChangePassword = (value: string) => {
        setPassword(value);
    }

    const onChangeConfirmedPassword = (value: string) => {
        setConfirmedPassword(value);
    }

    const onChangeUserName = (value: string) => {
        setUserName(value);
    }

    const submitRegistration = () => {
        if (userName && email && password && confirmedPassword) {
            if (password === confirmedPassword) {
                dispatch(register(userName, email, password));
                return navigate('/home');
            } else {
                alert('Пароли не совпадают');
            }
        } else {
            alert('Заполните все поля!')
        }
    }
    return (
        <div className='auth-main'>

            <div className='auth-main-form'>
                <input
                    value={userName}
                    onChange={(e) => onChangeUserName(e.target.value)}
                    type="text"
                    placeholder='Имя пользователя'
                />
            </div>

            <div className='auth-main-form'>
                <input
                    value={email}
                    onChange={(e) => onChangeEmail(e.target.value)}
                    type="email" placeholder='Email'/>
            </div>

            <div className='auth-main-form'>
                <input
                    value={password}
                    onChange={(e) => onChangePassword(e.target.value)}
                    type="password" placeholder='Пароль'/>
            </div>
            <div className='auth-main-form'>
                <input
                    value={confirmedPassword}
                    onChange={(e) => {
                        onChangeConfirmedPassword(e.target.value)
                    }}
                    type="password"
                    placeholder='Подтверждение пароля'/>
            </div>
            <div className='auth-main-form'>
            <button  onClick={() => {
                submitRegistration()
            }} className='login-btn '>Зарегистрироваться
            </button>
            </div>

        </div>)
}
