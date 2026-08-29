import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

// ─── EMAILJS SETUP ────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail works) → copy your Service ID below
// 3. Create an Email Template → copy your Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'service_tclzqel'
const EMAILJS_TEMPLATE_ID = 'template_r66eppq'
const EMAILJS_PUBLIC_KEY  = 'YqHkDm7IN_kdtUnnF'
// ──────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: '✉', label: 'Email', value: 'samuelmusadavid@gmail.com', href: 'mailto:samuelmusadavid@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+234 814 663 0559', href: 'tel:+2348146630559' },
  { icon: '📍', label: 'Location', value: 'Nigeria', href: null },
]

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/samuelmusadauda/' },
  { name: 'GitHub', href: 'https://github.com/Smartsambiz' },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1eS_7zedIaUpZhHKlEU8bLg3n3Ur7zItr/view?usp=sharing' },
  { name: 'WhatsApp', href: 'https://wa.me/2348146630559' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!fields.name.trim())    e.name    = 'Name is required'
    if (!fields.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Enter a valid email'
    if (!fields.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.p className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Get in touch
        </motion.p>
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Have a problem worth solving?
        </motion.h2>

        <div className={styles.grid}>
          {/* Left info panel */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className={styles.infoText}>
              Have a problem worth solving? I build web applications, AI-powered tools, and automation systems for people and businesses that want to make their work easier.
            </p>

            <div className={styles.contactItems}>
              {contactInfo.map(c => (
                <div key={c.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} className={styles.contactValue}>{c.value}</a>
                      : <p className={styles.contactValue}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn-outline" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="Samuel Dauda"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <p className={styles.formError}>
                    Something went wrong. Please try emailing me directly at samuelmusadavid@gmail.com
                  </p>
                )}

                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
