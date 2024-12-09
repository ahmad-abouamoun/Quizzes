import ReactQuiz from "./Quizzes/React-Quiz";
import AllQuizzes from "./Quizzes/AllQuizes/AllQuizzes";
import {useQuiz} from "./context/QuizContext";

export default function App() {
    const {quiz} = useQuiz();
    return <div>{quiz ? <ReactQuiz /> : <AllQuizzes />}</div>;
}
