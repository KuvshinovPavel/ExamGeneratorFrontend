import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../redux/actions/authAction";

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
        <div className='main'>

            <div>
                <input
                    value={userName}
                    onChange={(e) => onChangeUserName(e.target.value)}
                    type="text"
                    placeholder='Имя пользователя'
                />
            </div>

            <div>
                <input
                    value={email}
                    onChange={(e) => onChangeEmail(e.target.value)}
                    type="email" placeholder='Email'/>
            </div>

            <div>
                <input
                    value={password}
                    onChange={(e) => onChangePassword(e.target.value)}
                    type="password" placeholder='Пароль'/>
            </div>
            <div>
                <input
                    value={confirmedPassword}
                    onChange={(e) => {
                        onChangeConfirmedPassword(e.target.value)
                    }}
                    type="password"
                    placeholder='Подтверждение пароля'/>
            </div>
            <button onClick={() => {
                submitRegistration()
            }} className='login-btn'>Зарегистрироваться
            </button>


        </div>)
}