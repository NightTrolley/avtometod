import React from 'react';
import { Routes, Route } from 'react-router';
import Header from "./components/header/header.component";
import BodyComponent from "./components/Body/body.component";
import About from "./pages/about/about";
import EducationPage from "./pages/education/educationPage";
import EducationBPage from "./pages/education/educationB.page";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" exact element={<BodyComponent/>} />
                <Route path="/about" exact element={<About/>} />
                <Route path="/education" exact element={<EducationPage/>} />
                <Route path="/education-b" exact element={<EducationBPage/>} />
                <Route path="*" exact element={<NotFoundPage/>} />
            </Routes>
        </div>
    )
}

export default App;