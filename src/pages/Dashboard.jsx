import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Create initials for default avatar
  const getInitials = () => {
    if (user.displayName) {
      return user.displayName.split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user.email[0].toUpperCase();
  };

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName,
      });
      user.displayName = displayName;
      setMessage("Profile updated successfully!");
      setMessageType("success");
    } catch (err) {
      console.error("Update error:", err);
      setMessage("Update failed: " + err.message);
      setMessageType("error");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      return <Navigate to="/login" />;
    } catch (err) {
      setMessage("Logout failed: " + err.message);
      setMessageType("error");
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className={styles.title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        🍽️ VORA DELIGHT
      </motion.h1>

      <motion.div 
        className={styles.profileCard}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div 
          className={styles.defaultAvatar}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {getInitials()}
        </motion.div>
        
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Display Name:</strong> {user.displayName || "N/A"}</p>
      </motion.div>

      <motion.div 
        className={styles.formGroup}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.input
          type="text"
          placeholder="Update Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className={styles.input}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          onClick={handleUpdate}
          className={styles.updateButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Update Profile
        </motion.button>
        <motion.button
          onClick={handleLogout}
          className={styles.logoutButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={styles.logoutIcon}>🚪</span>
          Sign Out
        </motion.button>
        <AnimatePresence>
          {message && (
            <motion.p 
              className={`${styles.message} ${styles[messageType]}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
