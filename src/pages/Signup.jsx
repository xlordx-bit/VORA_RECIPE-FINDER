import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.scss';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signup__container}>
        <h2 className={styles.signup__title}>Create Account</h2>
        <form onSubmit={handleSignup} className={styles.signup__form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.signup__input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.signup__input}
            required
          />
          <button type="submit" className={styles.signup__button}>
            Sign Up
          </button>
          {error && <div className={styles.signup__error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
