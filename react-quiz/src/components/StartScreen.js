import {useQuiz} from "../context/QuizContext";

function StartScreen({numQuestions, dispatch}) {
    const {quiz, setQuiz} = useQuiz();

    return (
        <div className="start">
            <h3>Welcome to the {quiz} quiz!!</h3>
            <h3>
                {numQuestions} questions to test your {quiz} Mastery
            </h3>
            <button onClick={() => dispatch({type: "start"})} className="btn btn-ui">
                Let's start
            </button>
            <button onClick={() => setQuiz("")} className="btn btn-ui">
                Go Back
            </button>
        </div>
    );
}
export default StartScreen;
