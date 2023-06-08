import {FC} from "react";
import {OGEMathTest} from "./Tests/OGEMathTest";
import {generateToPDF} from "../../../helpers/generateToPDF";
import { useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export const OGEMath: FC = () => {
    const onClassicPDFGenerationButton = () => {
        generateToPDF();
    }


    const test: Array<{rightAnswer: string, latexEval: string}> = useSelector((data:RootState)=> data.tests.ogeMath);

    return (
        <div>
            <div className="action-btn pdf" onClick={() => onClassicPDFGenerationButton()}><span>СОХРАНИТЬ В PDF</span>
            </div>
            <OGEMathTest tasks={test}/>
        </div>
    )
}

// [{
//     text: '\\(\\frac{180}{10}\\)',
//     rightAnswer: '1.8'
// },
//     {
//         text: '\\(\\frac{20}{10} \\times 7\\)',
//         rightAnswer: '14'
//     },
// ]
