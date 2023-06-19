import {FC} from "react";
import {User} from "../../../redux/types/payloadDTO/user";
import '../../../styles/profile.css'
interface ProfileProps {
    user: User
}

export const Profile:FC<ProfileProps>=(props)=>{
const user = props.user;
    return(
        <div>
            <div className={'info'}>
                <span className={'user_info'}>{user?.userName}</span>
                <br/>
                <span className={'completed_tasks'} >Количество выполненных заданий: <span className={'completed_tasks_info'}>2</span></span>
            </div>
        </div>
    )
}
