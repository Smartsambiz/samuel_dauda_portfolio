import { motion } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <motion.div
          className={styles.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className={styles.imageWrap}>
            <img src="/images/my_image.png" alt="Samuel Musa Dauda" className={styles.photo} />
            <div className={styles.tag}>
              <span>Based in</span>
              <strong>Nigeria 🇳🇬</strong>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>About Me</motion.p>
          <motion.h2 className="section-title" style={{ marginBottom: 24 }} variants={fadeUp}>
            Turning ideas into<br />
            <em style={{ color: 'var(--yellow)', fontStyle: 'normal' }}>working software</em>
          </motion.h2>

          <motion.p className={styles.bio} variants={fadeUp}>
            Hi, I'm Samuel Musa Dauda — a software developer from Nigeria with a passion for building clean,
            functional, and user-friendly digital products. I enjoy turning ideas into reality through code,
            whether it's a landing page or a full-stack application.
          </motion.p>
          <motion.p className={styles.bio} variants={fadeUp}>
            My focus is on writing maintainable code, designing intuitive interfaces, and delivering
            applications that solve real problems. I'm always learning and pushing my skills forward.
          </motion.p>

          <motion.div className={styles.facts} variants={fadeUp}>
            <div className={styles.fact}>
              <span className={styles.factIcon}>🎓</span>
              <span>Self-taught developer since 2021</span>
              <span>TsAcademy - Software Engineering</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factIcon}>🚀</span>
              <span>10+ projects shipped</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factIcon}>🌍</span>
              <span>Open to remote opportunities worldwide</span>
            </div>
          </motion.div>

          <motion.a
            href="https://drive.google.com/file/d/1eS_7zedIaUpZhHKlEU8bLg3n3Ur7zItr/view?usp=sharing"
            download
            className="btn-primary"
            style={{ display: 'inline-flex', marginTop: 8 }}
            variants={fadeUp}
          >
            Download CV ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
