import {FC} from "react";
import {OGEMathTest} from "./Tests/OGEMathTest";
import {generateToPDF} from "../../../helpers/generateToPDF";

export const OGEMath: FC = () => {
    const onClassicPDFGenerationButton=()=>{
        generateToPDF();
    }
    return (
        <div>
            <div className="action-btn pdf" onClick={()=>onClassicPDFGenerationButton()}><span>СОХРАНИТЬ В PDF</span></div>
            <OGEMathTest tasks={[{
                text: 'У Гитлера было 5 яблок, у Муссолини 3 груши. Сколько хуев засунули за щеку Хирохито? ',
                rightAnswer: '1945'
            },
                {
                    text: 'У Гитлера было 5 яблок, у Муссолини 3  груши. Сколько хуев засунули за щеку Хирохито? ',
                    rightAnswer: '1945'
                },
            ]}/>
        </div>
    )
}
