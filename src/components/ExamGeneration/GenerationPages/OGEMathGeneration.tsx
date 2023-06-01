import {FC} from "react";
import {useNavigate} from "react-router-dom";
import '../../../styles/generation-page.css'

export const OGEMathGeneration: FC = () => {
   const navigate = useNavigate();
    const onClassicWEBGenerationButton=()=>{
       return navigate('/home/oge-math');
   }

    return (

        <div className='gen-main'>
            <div className="action-btn gen"  onClick={()=>onClassicWEBGenerationButton()}><span>СГЕНЕРИРОВАТЬ ОБЫЧНЫЙ ВАРИАНТ</span></div>

        </div>
    )
}
