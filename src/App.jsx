import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import RecipeSearch from "./pages/RecipeSearch.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import styles from './App.module.scss';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loading__spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
