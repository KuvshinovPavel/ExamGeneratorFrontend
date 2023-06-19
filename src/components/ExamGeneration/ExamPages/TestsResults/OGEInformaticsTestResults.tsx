import {FC} from "react";
interface OGEMathTestProps {
    rightAnswers: number
}

export const OGEInformaticsTestResults: FC<OGEMathTestProps> = (props) =>
{
    let rightAnswers = props.rightAnswers
    return(

            <div>Количество правильных ответов: {rightAnswers}</div>
    )
}
