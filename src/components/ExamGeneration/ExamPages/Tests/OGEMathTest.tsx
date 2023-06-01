import {FC, useState} from "react";
import '../../../../styles/test.css'
import {MathJax} from "better-react-mathjax";
import classNames from "classnames";

interface OGEMathTestProps {
    tasks: Array<{ text: string, rightAnswer: string }>
}

export const OGEMathTest: FC<OGEMathTestProps> = (props) => {
    const tasks = props.tasks;
    const [answer, setAnswer] = useState('');
    const onChangeAnswer = (value: string) => {
        setAnswer(value);
    }
    return (
        <div id='generated_test' className='test-body'>
            {
                tasks.map(t =>
                    <div>
                        <span className='test-span'><MathJax>{`${t.text}`}</MathJax></span>
                        <div>ОТВЕТ:</div>
                        <input onChange={(e) => onChangeAnswer(e.target.value)}
                               className={classNames('test-input', {'right': t.rightAnswer === answer})} type='text'/>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
}
