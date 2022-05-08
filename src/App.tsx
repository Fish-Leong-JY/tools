import React from 'react';
import Tools from "./Tools/Tools";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import ToolInfo from "./Tools/ToolInfo";
import "antd/dist/antd.css"
const ToMain = ()=>{
    return (
        <Navigate to="/main" />
    )
}
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/main' element={<Tools/>} />
                <Route path='/tools/:group/:option' element={<ToolInfo/>} />
                <Route path='/' element={<ToMain/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
