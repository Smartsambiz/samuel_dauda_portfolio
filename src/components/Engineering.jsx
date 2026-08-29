import { motion } from 'framer-motion'
import styles from './Engineering.module.css'

const capabilities = [
  {
    title: 'API Architecture',
    text: 'Designing maintainable APIs that connect applications, databases, and external services with clear contracts and reliable flows.',
  },
  {
    title: 'Data & Persistence',
    text: 'Structuring data models and using databases to store state reliably, manage relationships, and support application logic.',
  },
  {
    title: 'Security & Reliability',
    text: 'Authentication, validation, CORS, rate limits, environment-based secrets, and error handling to protect systems and reduce failure risk.',
  },
  {
    title: 'AI Integration',
    text: 'Integrating AI into real workflows where it reduces repetition, accelerates decisions, and improves the user experience.',
  },
  {
    title: 'External Integrations',
    text: 'Connecting products to third-party APIs, webhooks, messaging platforms, and business tools without creating brittle systems.',
  },
]

const technologies = ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'REST APIs', 'AI APIs', 'WhatsApp API', 'JWT', 'Webhooks', 'Railway', 'GitHub']

export default function Engineering() {
  return (
    <section id="engineering" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Engineering
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Building useful products requires more than connecting a few APIs.
        </motion.h2>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3 className={styles.title}>{capability.title}</h3>
              <p className={styles.text}>{capability.text}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.techWrap}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
