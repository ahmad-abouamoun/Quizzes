import {useQuiz} from "../context/QuizContext";

function Header() {
    const {quiz} = useQuiz();
    return (
        <header className="app-header">
            <img src="logo512.png" alt="React logo" />
            <h1>The {quiz} Quiz</h1>
        </header>
    );
}

export default Header;
