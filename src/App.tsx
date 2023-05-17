import React, {FC} from 'react';

import './styles/App.css';
import {MathJaxContext} from 'better-react-mathjax';
import {Route, Routes} from 'react-router-dom';
import {Authorization} from './components/Authorization';
import {Registration} from './components/Registration';
import {MainPage} from "./components/MainPage/MainPage";



const App: FC = () => {
    return (
        <MathJaxContext>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Authorization/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/home/*" element={<MainPage/>}/>
                </Routes>


            </div>
        </MathJaxContext>
    );
}

export default App;
//TODO make store, reducers and actions