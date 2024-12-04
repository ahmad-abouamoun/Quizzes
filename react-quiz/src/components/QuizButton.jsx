import {useQuiz} from "../context/QuizContext";

const QuizButton = ({data}) => {
    const {quiz, setQuiz} = useQuiz();
    return (
        <div>
            <button
                className="btn"
                onClick={() => {
                    setQuiz("react");
                }}
            >
                {data} Quiz
            </button>
        </div>
    );
};
export default QuizButton;
