import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import {ExamSelector} from "../ExamGeneration/ExamSelector";
import {Help} from "./Header/Help";
import {Profile} from "./Header/Profile";
import {OGEMathGeneration} from "../ExamGeneration/GenerationPages/OGEMathGeneration";
import {OGEInformaticsGeneration} from "../ExamGeneration/GenerationPages/OGEInformaticsGeneration";
import {EGEMathGeneration} from "../ExamGeneration/GenerationPages/EGEMathGeneration";
import {EGEInformaticsGeneration} from "../ExamGeneration/GenerationPages/EGEInformaticsGeneration";
import {OGEMath} from "../ExamGeneration/ExamPages/OGEMath";
import {OGEInformatics} from "../ExamGeneration/ExamPages/OGEInformatics";
import {EGEMath} from "../ExamGeneration/ExamPages/EGEMath";
import {EGEInformatics} from "../ExamGeneration/ExamPages/EGEInformatics";
import '../../styles/main-page.css'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {User} from "../../redux/types/payloadDTO/user";
import {OGEMathTestResults} from "../ExamGeneration/ExamPages/TestsResults/OGEMathTestResults";
import {OGEInformaticsTestResults} from "../ExamGeneration/ExamPages/TestsResults/OGEInformaticsTestResults";
export const MainPage: FC = () => {
    const isAuth: boolean = useSelector((data:RootState)=>data.auth.isAuth);
    const user: User  = useSelector((data:RootState)=>data.auth.user);
    const rightAnswers = useSelector((data: RootState) => data.rightAnswers.ogeMathRightAnswers)
    return (
        <div className="main-page">
            <Header isAuth={isAuth} user={user}/>
            <hr/>
            <Routes>
                <Route path={'/'} element={<ExamSelector/>}/>
                <Route path={'/help'} element={<Help/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/oge-math'} element={<OGEMath/>}/>
                <Route path={'/oge-inf'} element={<OGEInformatics/>}/>
                <Route path={'/ege-math'} element={<EGEMath/>}/>
                <Route path={'/ege-inf'} element={<EGEInformatics/>}/>
                <Route path={'/oge-math-gen'} element={<OGEMathGeneration/>}/>
                <Route path={'/oge-inf-gen'} element={<OGEInformaticsGeneration/>}/>
                <Route path={'/ege-math-gen'} element={<EGEMathGeneration/>}/>
                <Route path={'/ege-inf-gen'} element={<EGEInformaticsGeneration/>}/>

                <Route path={'/oge-math/results'} element={<OGEMathTestResults rightAnswers={rightAnswers}/>}/>
                <Route path={'/ege-math/results'} element={<OGEInformaticsTestResults rightAnswers={rightAnswers} />}/>
                <Route path={'/oge-inf/results'} element={<OGEInformaticsTestResults rightAnswers={rightAnswers} />}/>
                <Route path={'/oge-inf/results'} element={<EGEInformaticsGeneration/>}/>


            </Routes>


        </div>
    )
}
