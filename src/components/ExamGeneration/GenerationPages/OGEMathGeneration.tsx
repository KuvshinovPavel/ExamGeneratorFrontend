import {FC} from "react";
import {useNavigate} from "react-router-dom";
import '../../../styles/generation-page.css'
import {useDispatch} from "react-redux";
import {generateTest} from "../../../redux/actions/testsAction";

export const OGEMathGeneration: FC = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<any>();
   const onClassicWEBGenerationButton=()=>{
        dispatch(generateTest());
       return navigate('/home/oge-math');
   }

    return (

        <div className='gen-main'>
            <div className="action-btn gen"  onClick={()=>onClassicWEBGenerationButton()}><span>СГЕНЕРИРОВАТЬ ОБЫЧНЫЙ ВАРИАНТ</span></div>

        </div>
    )
}
