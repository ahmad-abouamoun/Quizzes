import ReactQuiz from "./Quizzes/React-Quiz";
import AllQuizzes from "./Quizzes/AllQuizes/AllQuizzes";
import {useQuiz} from "./context/QuizContext";
import Register from "./Register";
import Login from "./login";

export default function App() {
    const {quiz, change, logged} = useQuiz();
    return <div>{logged ? quiz ? <ReactQuiz /> : <AllQuizzes /> : change ? <Login /> : <Register />}</div>;
}
