import {useNavigate} from "react-router";

const AllQuizzes = ({setQuiz}) => {
    return (
        <div>
            <button
                className="btn "
                onClick={() => {
                    setQuiz("react");
                }}
            >
                Hello
            </button>
        </div>
    );
};
export default AllQuizzes;
