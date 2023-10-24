import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ativ01 from "./Ativ01";
import Ativ02 from "./Ativ02";
import Ativ03 from "./Ativ03";

export default function minhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ativ01" element={<Ativ01/>}/>
                <Route path="/ativ02" element={<Ativ02/>}/>
                <Route path="/ativ03" element={<Ativ03/>}/>
            </Routes>
        </BrowserRouter>
    )
}