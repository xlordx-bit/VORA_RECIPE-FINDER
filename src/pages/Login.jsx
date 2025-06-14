import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <h2 className={styles.login__title}>Welcome Back</h2>
        <form onSubmit={handleLogin} className={styles.login__form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.login__input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.login__input}
            required
          />
          <button type="submit" className={styles.login__button}>
            Login
          </button>
          {error && <div className={styles.login__error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
