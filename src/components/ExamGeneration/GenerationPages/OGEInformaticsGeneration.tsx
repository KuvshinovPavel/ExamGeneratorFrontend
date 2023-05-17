import {FC} from "react";

export const OGEInformaticsGeneration: FC = () => {
    return (
        <div>
            <div className="action-btn"  onClick={()=>alert('sgen')}><span>Сгенерировать обычный вариант</span></div>
            <div className="action-btn" onClick={()=>alert('pdf')}><span>Сохранить в PDF</span></div>
        </div>
    )
}