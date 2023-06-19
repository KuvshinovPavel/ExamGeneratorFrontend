import {FC, useState} from "react";
import {generateToPDF} from "../../../helpers/generateToPDF";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useNavigate} from "react-router-dom";
import {addRightAnswerOM} from "../../../redux/actions/rightAnswersAction";

import classNames from "classnames";

export const OGEInformatics: FC = () => {

    const onClassicPDFGenerationButton = () => {
        generateToPDF();
    }

    const tests:Array<{
        cppCode :string,
        pascalCode:string,
        basicCode:string,
        pythonCode:string,
        rightAnswer:string,
        description:string
    }>  = useSelector((data: RootState) => data.tests.ogeInformatics);
    const test = tests[0];
    const dispatch = useDispatch<any>();

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
		tests.map(t=>
                        <div>
                            <span>{t.description}</span>
                            <div className={'codes'}>
                                <div className={'code-listing'}><pre>{t.cppCode}</pre></div>
                                <div className={'code-listing'}><pre>{t.basicCode}</pre></div>
                                <div className={'code-listing'}><pre>{t.pythonCode}</pre></div>
                                <div className={'code-listing'}><pre>{t.pascalCode}</pre></div>
                            </div>

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
        </div>)
}
