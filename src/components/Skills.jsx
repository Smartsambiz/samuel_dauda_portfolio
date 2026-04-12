import { motion } from 'framer-motion'
import { skills, experience } from '../data/skills'
import styles from './Skills.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
  }),
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          What I work with
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Skills &amp; Technologies
        </motion.h2>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={styles.card}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <img src={skill.icon} alt={skill.name} className={styles.icon} />
              <p className={styles.name}>{skill.name}</p>
              <div className={styles.barTrack}>
                <motion.div
                  className={styles.barFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                />
              </div>
              <span className={styles.level}>{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
