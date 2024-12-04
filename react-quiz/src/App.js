import {Route, Router, Routes} from "react-router";
import ReactQuiz from "./Quizzes/React-Quiz";
import AllQuizzes from "./Quizzes/AllQuizes/AllQuizzes";
import {useState} from "react";
import {useQuiz} from "./context/QuizContext";

export default function App() {
    const {quiz} = useQuiz();
    return <div>{quiz ? <ReactQuiz /> : <AllQuizzes />}</div>;
}
