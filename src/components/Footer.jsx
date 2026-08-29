import { Link } from 'react-scroll'
import styles from './Footer.module.css'

const navLinks = ['About', 'Projects', 'Process', 'Engineering', 'Contact']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <Link to="hero" smooth duration={500} className={styles.logo}>
            Samuel<span>.</span>
          </Link>
          <nav className={styles.links}>
            {navLinks.map(link => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-80}
                className={styles.link}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Samuel Musa Dauda. All rights reserved.
          </p>
          <p className={styles.made}>
            Built with React &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
