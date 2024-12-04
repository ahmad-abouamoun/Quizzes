import {Route, Router, Routes} from "react-router";
import ReactQuiz from "./Quizzes/React-Quiz";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ReactQuiz />} />
                <Route path="/react" element={<ReactQuiz />} />
            </Routes>
        </Router>
    );
}
