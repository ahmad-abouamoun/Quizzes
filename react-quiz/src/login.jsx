import styles from "./auth.module.css";
import {useQuiz} from "./context/QuizContext";
import useForm from "./hooks/useForm";

const Login = () => {
    const {form, updateForm} = useForm({
        email: "",
        password: "",
    });
    const {setLogged, setChange} = useQuiz();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("fetching didnot happen yet");

        const response = await fetch("http://localhost:8080/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                email: form.email,
                password: form.password,
            },
        });
        console.log("fetching happened");
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);
            setLogged(true);
        } else {
            alert(data.message || "Login failed");
        }
    };

    return (
        <div className={styles.signupContainer}>
            <form className={styles.signupForm} onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={updateForm}
                    required
                />
                <button type="submit">Sign In</button>
                <p>
                    Do not have an account?
                    <span className={styles.loginLink} onClick={() => setChange(false)}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
