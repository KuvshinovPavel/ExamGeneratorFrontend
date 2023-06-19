import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {generateTestOGEInf} from "../../../redux/actions/testsAction";

export const OGEInformaticsGeneration: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const onClassicWEBGenerationButton=()=>{
        dispatch(generateTestOGEInf());
        return navigate('/home/oge-inf');
    }
    return (
        <div className='gen-main'>
            <div className="action-btn gen"  onClick={()=>onClassicWEBGenerationButton()}><span>СГЕНЕРИРОВАТЬ ОБЫЧНЫЙ ВАРИАНТ</span></div>

        </div>
    )
}
