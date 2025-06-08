import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaHeartbeat, FaClock, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdFoodBank, MdEmail } from 'react-icons/md';
import styles from './Home.module.scss';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          VORA DELIGHT
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover the Art of Culinary Excellence
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/search" className={styles.cta}>
            Explore Recipes
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className={styles.about}
        {...fadeInUp}
      >
        <div className={styles.container}>
          <h2>Welcome to VORA DELIGHT</h2>
          <p>
            Your ultimate destination for discovering and creating delicious recipes. 
            Whether you're a seasoned chef or just starting your culinary journey, 
            we're here to inspire and guide you through the world of cooking.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <motion.h2 {...fadeInUp}>Why Choose VORA DELIGHT?</motion.h2>
          <motion.div 
            className={styles.featureGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <FaSearch className={styles.icon} />
              <h3>Smart Recipe Search</h3>
              <p>Find recipes based on ingredients you have or dietary preferences.</p>
            </motion.div>

            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <FaHeartbeat className={styles.icon} />
              <h3>Healthy Living</h3>
              <p>Discover nutritious recipes that don't compromise on taste.</p>
            </motion.div>

            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <FaClock className={styles.icon} />
              <h3>Time-Saving</h3>
              <p>Quick and easy recipes for busy lifestyles.</p>
            </motion.div>

            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <MdFoodBank className={styles.icon} />
              <h3>Meal Planning</h3>
              <p>Plan your meals ahead with our organized recipe collections.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Contact Us</h3>
              <a href="mailto:contact@voradelight.com" className={styles.footerLink}>
                <MdEmail /> contact@voradelight.com
              </a>
            </div>

            <div className={styles.footerSection}>
              <h3>Follow Us</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}><FaGithub /></a>
                <a href="#" className={styles.socialLink}><FaTwitter /></a>
                <a href="#" className={styles.socialLink}><FaLinkedin /></a>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h3>Quick Links</h3>
              <Link to="/search" className={styles.footerLink}>Recipe Search</Link>
              <Link to="/signup" className={styles.footerLink}>Sign Up</Link>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} VORA DELIGHT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;