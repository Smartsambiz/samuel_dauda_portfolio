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

        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>About</motion.p>
          <motion.h2 className="section-title" style={{ marginBottom: 24 }} variants={fadeUp}>
            I build practical software that helps people and businesses work better.
          </motion.h2>

          <motion.p className={styles.bio} variants={fadeUp}>
            I’m a software developer focused on building useful products with AI, automation, and modern web technologies. I enjoy taking repetitive, inefficient, or difficult work and turning it into software that makes the process simpler.
          </motion.p>
          <motion.p className={styles.bio} variants={fadeUp}>
            My background in teaching shaped how I think about software: break complex problems down, understand the person using the system, and build solutions that are clear, useful, and intentional.
          </motion.p>

          <motion.div className={styles.ctaRow} variants={fadeUp}>
            <a
              href="https://drive.google.com/file/d/1eS_7zedIaUpZhHKlEU8bLg3n3Ur7zItr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Resume →
            </a>
            <a
              href="https://www.linkedin.com/in/samuelmusadauda/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
