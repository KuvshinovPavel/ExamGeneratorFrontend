import {FC} from "react";
import "../../../styles/help-page.css"
export const Help:FC=()=>{
    return(
        <div className="help">
           <p >
               Приложение <span className="name"> Генератор текстов ОГЭ/ЕГЭ</span>
               было создано в качестве дипломного проекта.
           </p>
            <p>
                Как пользоваться:
            </p>
            <p>
                Выберите интересующий вас предмет. После выбора предмета вам предстоит
                указать тип создания варианта: целый, либо же с произвольным выбором заданий.
                Далее вы можете наслаждаться решением сгенерированного варианта на сайте или сохранить
                его в формате PDF.
            </p>
           <div></div>
        </div>
    )
}