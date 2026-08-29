import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

const featuredProjects = projects.filter(project => project.featured)
const supportingProjects = projects.filter(project => !project.featured)

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I don't just build software. I build systems around real problems.
        </motion.h2>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${styles.featuredCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <span className={styles.featuredBadge}>Featured</span>
                {project.inProgress && <span className={styles.progressBadge}>In Progress</span>}
              </div>

              <div className={styles.body}>
                <p className={styles.kicker}>{project.kicker || 'AI-powered product & workflow solution'}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.highlight}>{project.highlight}</p>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.caseStudy}>
                  <div className={styles.caseRow}>
                    <span className={styles.caseLabel}>Problem</span>
                    <p>{project.problem || 'The core challenge this product addresses.'}</p>
                  </div>
                  <div className={styles.caseRow}>
                    <span className={styles.caseLabel}>Solution</span>
                    <p>{project.solution || 'The product turns that challenge into a clearer, simpler workflow.'}</p>
                  </div>
                  <div className={styles.caseRow}>
                    <span className={styles.caseLabel}>Engineering</span>
                    <p>{project.engineering || 'A focused system architecture designed around the specific product workflow and user experience.'}</p>
                  </div>
                  <div className={styles.caseRow}>
                    <span className={styles.caseLabel}>Status</span>
                    <p>{project.status || (project.inProgress ? 'Active product work with ongoing iteration and feature refinement.' : 'Built and deployed for use.')}</p>
                  </div>
                </div>

                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.live && (
                    <a href={project.live} className={styles.overlayBtn} target="_blank" rel="noreferrer">
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className={styles.overlayBtn} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.supportingGrid}>
          {supportingProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.highlight}>{project.highlight}</p>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
