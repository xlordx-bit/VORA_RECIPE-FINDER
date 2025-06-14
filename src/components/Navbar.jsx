import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { user: currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={styles.navbar__container}>
        <Link to="/" className={styles.navbar__logo}>
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            🍽️
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            VORA DELIGHT
          </motion.span>
        </Link>

        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.navbar__burger}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <div className={`${styles.burger_line} ${isMobileMenuOpen ? styles.burger_line_open : ''}`} />
          <div className={`${styles.burger_line} ${isMobileMenuOpen ? styles.burger_line_open : ''}`} />
          <div className={`${styles.burger_line} ${isMobileMenuOpen ? styles.burger_line_open : ''}`} />
        </motion.button>

        <div className={`${styles.navbar__menu} ${isMobileMenuOpen ? styles.navbar__menu_open : ''}`}>
          <div className={styles.navbar__links}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className={`${styles.navbar__link} ${location.pathname === '/' ? styles.navbar__link_active : ''}`}>
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/search" className={`${styles.navbar__link} ${location.pathname === '/search' ? styles.navbar__link_active : ''}`}>
                Search
              </Link>
            </motion.div>
            {currentUser && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/dashboard" className={`${styles.navbar__link} ${location.pathname === '/dashboard' ? styles.navbar__link_active : ''}`}>
                  Dashboard
                </Link>
              </motion.div>
            )}
          </div>

          <div className={styles.navbar__auth}>
            {currentUser ? (
              <>
                <span className={styles.navbar__email}>{currentUser.email}</span>                <motion.button 
                  onClick={handleLogout} 
                  className={styles.logoutBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Sign Out</span>
                  <span className={styles.icon}>🚪</span>
                </motion.button>
              </>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/login" className={styles.navbar__button_secondary}>
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/signup" className={styles.navbar__button}>
                    Sign Up
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
