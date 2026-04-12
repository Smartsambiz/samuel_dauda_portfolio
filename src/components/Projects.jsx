import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.p className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          What I've built
        </motion.p>
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                <div className={styles.overlay}>
                  <a href={project.live} className={styles.overlayBtn} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href={project.github} className={styles.overlayBtn} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
