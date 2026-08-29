import { motion } from 'framer-motion'
import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Understand the Problem',
    text: 'Before writing code, I focus on the people, workflow, and pain points the product needs to solve.',
  },
  {
    number: '02',
    title: 'Design the System',
    text: 'I break the problem into features, workflows, APIs, data structures, and integrations before building.',
  },
  {
    number: '03',
    title: 'Build the Foundation',
    text: 'I build robust web applications with clean architecture, maintainability, security, and reliability in mind.',
  },
  {
    number: '04',
    title: 'Integrate AI Where It Helps',
    text: 'AI is introduced only where it reduces effort, improves the user experience, or solves a real operational problem.',
  },
  {
    number: '05',
    title: 'Iterate',
    text: 'Build, test, learn, improve. Good product work is an ongoing loop of feedback and refinement.',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How I Build
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Understand → Design → Build → Integrate AI → Iterate
        </motion.h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
