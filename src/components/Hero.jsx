import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className={styles.greeting}>
            <span className={styles.wave}>👋</span> AI Product Developer
          </p>

          <h1 className={styles.name}>
            I build AI-powered products that make work easier.
          </h1>

          <p className={styles.tagline}>
            I design and build web applications and automation tools that integrate AI to solve practical problems and simplify everyday work.
          </p>

          <div className={styles.ctas}>
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary">
                View My Work →
              </button>
            </Link>
            <a
              href="https://github.com/Smartsambiz"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub →
            </a>
          </div>

          <div className={styles.quickLinks}>
            <a href="https://drive.google.com/file/d/1eS_7zedIaUpZhHKlEU8bLg3n3Ur7zItr/view?usp=sharing" target="_blank" rel="noreferrer" className={styles.quickLink}>Resume</a>
            <a href="https://github.com/Smartsambiz" target="_blank" rel="noreferrer" className={styles.quickLink}>GitHub</a>
            <a href="https://www.linkedin.com/in/samuelmusadauda/" target="_blank" rel="noreferrer" className={styles.quickLink}>LinkedIn</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Years building</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>12+</span>
              <span className={styles.statLabel}>Projects shipped</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Tools used</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.imageWrap}>
            <div className={styles.imageBorder} />
            <img
              src="/images/my_image.png"
              alt="Samuel Musa Dauda"
              className={styles.photo}
            />
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
