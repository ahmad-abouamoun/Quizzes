import {useContext} from "react";
import {useState} from "react";
import {createContext} from "react";

const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const [quiz, setQuiz] = useState("");
    return <QuizContext.Provider value={{quiz, setQuiz}}>{children}</QuizContext.Provider>;
};
export const useQuiz = () => useContext(QuizContext);
