import {FC, useState} from "react";
import '../../../../styles/test.css'
import {MathJax} from "better-react-mathjax";
import classNames from "classnames";

interface OGEMathTestProps {
    rightAnswers: number
}

export const OGEMathTestResults: FC<OGEMathTestProps> = (props) =>
{
    let rightAnswers = props.rightAnswers
    // let raCount=0;
    // let tasks: Array<{ latexEval: string, rightAnswer: string, description: string }> = props.tasks;
    // console.log('TASKS', tasks)
    // const [answer, setAnswer] = useState('');
    // const onChangeAnswer = (value: string, rightAnswer: string) => {
    //     setAnswer(value);
    //     if (value===rightAnswer) {
    //         raCount++;
    //     }
    // }


    return (
        <div>Количество правильных ответов {rightAnswers}</div>
        // <div id='generated_test' className='test-body'>
        //     {
        //         tasks.map(t =>
        //             <div>
        //                 <span>{t.description}</span>
        //                 <span className='test-span'><MathJax>{`${t.latexEval}`}</MathJax></span>
        //                 <div>ОТВЕТ:</div>
        //                 <input onChange={(e) => onChangeAnswer(e.target.value, t.rightAnswer)}
        //                        className={classNames('test-input', {'right': t.rightAnswer === answer})} type='text'/>
        //                 <hr/>
        //             </div>
        //         )
        //     }
        // </div>
    )
}
