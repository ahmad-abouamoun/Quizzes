import ReactQuiz from "./Quizzes/React-Quiz";
import AllQuizzes from "./Quizzes/AllQuizes/AllQuizzes";
import {useQuiz} from "./context/QuizContext";

export default function App() {
    const {quiz, setQuiz} = useQuiz();
    return (
        <div>
            {quiz === "choosing" && <AllQuizzes setQuiz={setQuiz} />}
            {quiz === "react" && <ReactQuiz />}
        </div>
    );
}
