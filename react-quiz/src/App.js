import {Route, Router, Routes} from "react-router";
import ReactQuiz from "./Quizzes/React-Quiz";
import AllQuizzes from "./Quizzes/AllQuizzes";
import {useState} from "react";

export default function App() {
    const [quiz, setQuiz] = useState("");
    return (
        <div>
            {quiz === "" && <AllQuizzes setQuiz={setQuiz} />}
            {quiz === "react" && <ReactQuiz />}
        </div>
    );
}
