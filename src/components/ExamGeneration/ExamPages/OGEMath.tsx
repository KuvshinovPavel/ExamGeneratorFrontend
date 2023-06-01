import {FC} from "react";
import {OGEMathTest} from "./Tests/OGEMathTest";
import {generateToPDF} from "../../../helpers/generateToPDF";

export const OGEMath: FC = () => {
    const onClassicPDFGenerationButton = () => {
        generateToPDF();
    }
    return (
        <div>
            <div className="action-btn pdf" onClick={() => onClassicPDFGenerationButton()}><span>СОХРАНИТЬ В PDF</span>
            </div>
            <OGEMathTest tasks={[{
                text: '\\(\\frac{180}{10}\\)',
                rightAnswer: '1.8'
            },
                {
                    text: '\\(\\frac{20}{10} \\times 7\\)',
                    rightAnswer: '14'
                },
            ]}/>
        </div>
    )
}
