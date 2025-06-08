import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });      // Update local user object to reflect changes immediately
      user.displayName = displayName;
      user.photoURL = photoURL;
      setMessage("Profile updated successfully!");
      setMessageType("success");
    } catch (err) {
      setMessage("Update failed: " + err.message);
      setMessageType("error");
    }
  };
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >      <motion.h1 
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
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>
        <p><strong>Display Name:</strong> {user.displayName || "N/A"}</p>
        {user.photoURL && (
          <motion.img 
            src={user.photoURL} 
            alt="Profile" 
            className={styles.profileImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        )}
      </motion.div>      <motion.div 
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
        <motion.input
          type="text"
          placeholder="Update Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
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

      <motion.button
        onClick={logout}
        className={styles.logoutButton}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Logout
      </motion.button>
    </motion.div>
  );
};

export default Dashboard;
