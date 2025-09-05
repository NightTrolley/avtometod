import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router';
import Header from "./components/header/header.component";
import BodyComponent from "./components/Body/body.component";
import About from "./pages/about/about";
import EducationPage from "./pages/education/educationPage";
import EducationBPage from "./pages/education/educationB.page";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import EducationAPage from "./pages/education/educationA.page";
import OnlinePage from "./pages/online/online.page";
import PolicyPage from "./pages/policy/policy.page";
import ContactsPage from "./pages/contacts/contacts.page";
import {QuizProvider} from "./Context/quizContext";
import {ModalContextProvider} from "./Context/modalContext";
import PayPage from "./pages/Pay/pay.page";
import {getUtmParameters} from "./utils/utmParser";

function App() {

    useEffect(() => {
        const utms = getUtmParameters()

        if (Object.keys(utms).length > 0) {
            localStorage.setItem('utms', JSON.stringify(utms))
        }
    }, []);

    return (
        <ModalContextProvider>
            <QuizProvider>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" exact element={<BodyComponent/>}/>
                        <Route path="/about" exact element={<About/>}/>
                        <Route path="/education" exact element={<EducationPage/>}/>
                        <Route path="/education-b" exact element={<EducationBPage/>}/>
                        <Route path="/education-a" exact element={<EducationAPage/>}/>
                        <Route path="/online" exact element={<OnlinePage/>}/>
                        <Route path="/policy" exact element={<PolicyPage/>}/>
                        <Route path="/contacts" exact element={<ContactsPage/>}/>
                        <Route path="/pay" exact element={<PayPage/>}/>
                        <Route path="*" exact element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </QuizProvider>
        </ModalContextProvider>
    )
}

export default App;