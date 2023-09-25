import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "@/Pages/Home";

//LAYOUTS
import LayoutWithHeaderFooter from "@/Layout/LayoutWithHeaderFooter";


function App(): React.ReactElement {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<LayoutWithHeaderFooter/>}>
                    <Route path="/" element={<Home/>} />
                </Route>
                
            </Routes>
        </Router>
    )
}


export default App;