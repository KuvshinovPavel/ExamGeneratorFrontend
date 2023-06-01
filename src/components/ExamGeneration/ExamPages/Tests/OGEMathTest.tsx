import {FC} from "react";
import '../../../../styles/test.css'

interface OGEMathTestProps {
    tasks: Array<{ text: string, rightAnswer: string }>
}

export const OGEMathTest: FC<OGEMathTestProps> = (props) => {
    const tasks = props.tasks;
    return (
        <div id='generated_test' className='test-body'>
            {
                tasks.map(t =>
                    <div>
                        <span>{t.text}</span>
                        <div>ОТВЕТ:</div>
                        <input type='text'/>
                    </div>
                )
            }
        </div>
    )
}
