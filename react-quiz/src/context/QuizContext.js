import {useContext} from "react";
import {useState} from "react";
import {createContext} from "react";

const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const [logged, setLogged] = useState(false);
    const [change, setChange] = useState(false);
    const [quiz, setQuiz] = useState("");
    return (
        <QuizContext.Provider value={{quiz, setQuiz, logged, setLogged, change, setChange}}>
            {children}
        </QuizContext.Provider>
    );
};
export const useQuiz = () => useContext(QuizContext);
