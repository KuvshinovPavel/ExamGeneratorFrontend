import {FC} from "react";
import "../../styles/exam-selector-page.css"
import {NavLink} from "react-router-dom";

export const ExamSelector: FC = () => {
    return (
        <div>
            <div className="title">ВЫБЕРИТЕ ПРЕДМЕТ</div>
            <div className="main-content">
                <div className="ex">
                    <span>ОГЭ:</span>
                    {/*TODO: here we are*/}
                    <div
                        className="subject math">
                        <NavLink
                            className="select-subject-navlink"
                            to="/home/oge-math-gen">
                            <span>Математика</span>
                        </NavLink>
                    </div>
                    <div className="subject inf">
                        <NavLink
                            className="select-subject-navlink"
                            to="/home/oge-inf-gen">
                            <span>Информатика</span>
                        </NavLink>
                    </div>
                </div>

                <div className="ex">
                    <span>ЕГЭ:</span>
                    <div className="subject math">
                        <NavLink
                            className="select-subject-navlink"
                            to="/home/ege-math-gen">
                            <span>Математика</span>
                        </NavLink>
                    </div>

                    <div className="subject inf">
                        <NavLink
                            className="select-subject-navlink"
                            to="/home/ege-inf-gen">
                            <span>Информатика</span>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}