import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="hero" smooth duration={500} className={styles.logo}>
            Samuel<span>.</span>
          </Link>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map(link => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeClass={styles.active}
                  className={styles.link}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire me button */}
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className={styles.hireCta}
          >
            Hire Me
          </Link>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-80}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
