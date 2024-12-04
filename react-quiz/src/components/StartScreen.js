import {useQuiz} from "../context/QuizContext";

function StartScreen({numQuestions, dispatch}) {
    const {setQuiz} = useQuiz();

    return (
        <div className="start">
            <h3>Welcome to the react quiz!!</h3>
            <h3>{numQuestions} questions to test your React Mastery</h3>
            <button onClick={() => dispatch({type: "start"})} className="btn btn-ui">
                Let's start
            </button>
            <button onClick={() => setQuiz("choosing")} className="btn btn-ui">
                Go Back
            </button>
        </div>
    );
}
export default StartScreen;
