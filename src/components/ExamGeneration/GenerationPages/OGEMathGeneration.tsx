import {FC} from "react";
import {useNavigate} from "react-router-dom";

export const OGEMathGeneration: FC = () => {
   const navigate = useNavigate();
    const onClassicWEBGenerationButton=()=>{
       return navigate('/home/oge-math');
   }
   const onClassicPDFGenerationButton=()=>{

   }
    return (

        <div>
            <div className="action-btn"  onClick={()=>onClassicWEBGenerationButton()}><span>Сгенерировать обычный вариант</span></div>
            <div className="action-btn" onClick={()=>onClassicPDFGenerationButton()}><span>Сохранить в PDF</span></div>
        </div>
    )
}
