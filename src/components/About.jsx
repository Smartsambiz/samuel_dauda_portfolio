import { motion } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const frontendTech = ['React', 'JavaScript', 'HTML5', 'CSS3']
const backendTech = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL (learning)']
const otherTech = ['REST APIs', 'Git & GitHub', 'Postman', 'Docker (learning)', 'Railway', 'AI Integrations', 'Webhooks', 'API Integrations']

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
            Full-Stack Developer<br />
            <em style={{ color: 'var(--yellow)', fontStyle: 'normal' }}>building complete products</em>
          </motion.h2>

          <motion.p className={styles.bio} variants={fadeUp}>
            I'm an early-career Full-Stack Software Developer who enjoys building complete products — from beautiful user interfaces to scalable backend services. I specialize in creating full-stack web applications, REST APIs, AI-powered systems, and business automation tools using modern JavaScript technologies.
          </motion.p>
          <motion.p className={styles.bio} variants={fadeUp}>
            I have hands-on experience building payment integrations, authentication systems, database-driven applications, workflow automation, and deploying production-ready solutions. I'm always learning and pushing my skills to build software that solves real problems.
          </motion.p>

          <motion.div className={styles.techStack} variants={fadeUp}>
            <div className={styles.techGroup}>
              <span className={styles.techGroupLabel}>Frontend</span>
              <div className={styles.techTags}>
                {frontendTech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
            </div>
            <div className={styles.techGroup}>
              <span className={styles.techGroupLabel}>Backend</span>
              <div className={styles.techTags}>
                {backendTech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
            </div>
            <div className={styles.techGroup}>
              <span className={styles.techGroupLabel}>Other</span>
              <div className={styles.techTags}>
                {otherTech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
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
