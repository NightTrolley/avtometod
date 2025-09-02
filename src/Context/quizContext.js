import {createContext, useContext, useState} from "react";

const QuizContext = createContext();

export const useQuiz = () => {
    const context = useContext(QuizContext)
    if (!context) {
        throw new Error("useQuiz must be used within a QuizProvider")
    }
    return context
}

export const QuizProvider = ({children}) => {
    const [quizData, setQuizData] = useState({
        format: 'Онлайн',
        gearbox: 'Автоматическая',
        experience: 'Есть опыт вождения',
        pay: 'Оплата полностью',
        startTime: 'Как можно скорей'
    })

    const updateQuizData = (name, value) => {
        setQuizData(
            prev => ({
                ...prev,
                    [name]: value
            })
        )
    }

    const resetQuizData = () => {
        setQuizData({
            format: 'онлайн',
            gearbox: 'automatic',
            experience: 'Есть',
            pay: 'Полностью',
            startTime: 'Как можно скорей'
        });
    }

    return (
        <QuizContext.Provider value={{quizData, updateQuizData, resetQuizData}}>
            {children}
        </QuizContext.Provider>
    )
}