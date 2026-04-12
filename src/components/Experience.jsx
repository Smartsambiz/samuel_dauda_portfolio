import { motion } from 'framer-motion'
import { experience } from '../data/skills'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.p className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          My journey
        </motion.p>
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experience.map((item, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.dotCol}>
                <div className={styles.dot} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <span className={styles.type}>{item.type}</span>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <ul className={styles.points}>
                  {item.points.map((p, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
