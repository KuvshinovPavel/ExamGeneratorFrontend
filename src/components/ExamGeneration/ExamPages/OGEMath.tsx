import {FC, useState} from "react";
import {OGEMathTestResults} from "./TestsResults/OGEMathTestResults";
import {generateToPDF} from "../../../helpers/generateToPDF";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {MathJax} from "better-react-mathjax";
import classNames from "classnames";

import {useNavigate} from "react-router-dom";
import {addRightAnswerOM} from "../../../redux/actions/rightAnswersAction";

export const OGEMath: FC = () => {
    const onClassicPDFGenerationButton = () => {
        generateToPDF();
    }


    const test: Array<{
        rightAnswer: string,
        latexEval: string,
        description: string
    }> = useSelector((data: RootState) => data.tests.ogeMath);
    const dispatch = useDispatch<any>();


    console.log('TASKS', test)
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
    const onChangeAnswer = (value: string, rightAnswer: string) => {
        setAnswer(value);
        if (value === rightAnswer) {

            dispatch(addRightAnswerOM());
        }
    }

    return (
        <div>
            <div className="action-btn pdf" onClick={() => onClassicPDFGenerationButton()}><span>СОХРАНИТЬ В PDF</span>
            </div>
            {/*<OGEMathTestResults tasks={test}/>*/}
            <div id='generated_test' className='test-body'>
                {
                    test.map(t =>
                        <div>
                            <span>{t.description}</span>
                            <span className='test-span'><MathJax>{`${t.latexEval}`}</MathJax></span>
                            <div>ОТВЕТ:</div>
                            <input onChange={(e) => onChangeAnswer(e.target.value, t.rightAnswer)}
                                   className={classNames('test-input', {'right': t.rightAnswer === answer})}
                                   type='text'/>

                            <hr/>
                        </div>
                    )
                }
            </div>
            <button onClick={()=>{
                return navigate('results')
            }}>Узнать результаты</button>
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
