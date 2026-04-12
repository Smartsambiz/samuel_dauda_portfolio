import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const roles = ['Software Developer', 'Frontend Engineer', 'React Developer', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        {/* Left */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hello, I'm
          </p>

          <h1 className={styles.name}>
            Samuel<br />
            <span className={styles.nameAccent}>Musa Dauda</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleText}>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.tagline}>
            I build clean, functional digital solutions — from responsive frontends to full-stack web apps.
          </p>

          <div className={styles.ctas}>
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary">
                View Projects →
              </button>
            </Link>
            <a href="/Samuel_Dauda_CV.pdf" download>
              <button className="btn-outline">
                Download CV
              </button>
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Years coding</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Projects built</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </div>
        </motion.div>

        {/* Right */}
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

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
