import {useEffect, useReducer} from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Loader from "../components/Loader";
import Error from "../components/Error";
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";
import NextButton from "../components/NextButton";
import Finished from "../components/Finished";
import Progress from "../components/Progress";
import {useQuiz} from "../context/QuizContext";

const intitialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
};
function reducer(state, action) {
    switch (action.type) {
        case "start":
            return {...state, status: "active"};
        case "dataRecieved":
            return {...state, questions: action.payload, status: "ready"};
        case "dataFailed":
            return {...state, status: "error"};
        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points: question.correctOption === action.payload ? state.points + question.points : state.points,
            };
        case "nextQuestion": {
            return {...state, index: state.index + 1, answer: null};
        }
        case "finished": {
            return {...state, status: "finished"};
        }
        case "restart": {
            return {...state, index: 0, answer: null, points: 0, status: "ready"};
        }
        default:
            throw new Error("Action is unknown");
    }
}
const React_Quiz = () => {
    const {quiz} = useQuiz();
    let api;
    if (quiz === "React") {
        api = "http://localhost:8000/questions";
    } else if (quiz === "Laravel") {
        api = "http://localhost:8001/questions";
    } else {
        api = "http://localhost:8002/questions";
    }
    const [{questions, status, index, answer, points}, dispatch] = useReducer(reducer, intitialState);
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
    useEffect(function () {
        fetch(`${api}`)
        .then((res) => res.json())
        .then((data) => dispatch({type: "dataRecieved", payload: data}))
        .catch((err) => dispatch({type: "dataFailed"}));
    }, []);
    return (
        <div className="app">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
                {status === "active" && (
                    <>
                        <Progress
                            index={index}
                            numQuestions={numQuestions}
                            points={points}
                            maxPossiblePoints={maxPossiblePoints}
                        />
                        <Question question={questions[index]} dispatch={dispatch} answer={answer} />
                        <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />
                    </>
                )}
                {status === "finished" && (
                    <Finished points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />
                )}
            </Main>
        </div>
    );
};
export default React_Quiz;
