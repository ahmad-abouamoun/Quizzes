import {useNavigate} from "react-router";

const AllQuizzes = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={navigate("react")}></button>
        </div>
    );
};
export default AllQuizzes;
