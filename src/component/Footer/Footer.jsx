import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoBadge}>🌍</span>
              Egypt Tours Gate
            </div>
            <p className={styles.brandText}>
              Crafting unforgettable journeys across Egypt: Cairo, Luxor, Aswan, Red Sea and more.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn} aria-label="Facebook">f</a>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">★</a>
              <a href="#" className={styles.socialBtn} aria-label="Twitter">t</a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><a className={styles.link} href="#about">About Us</a></li>
              <li><a className={styles.link} href="#tours">Tours</a></li>
              <li><a className={styles.link} href="#blog">Blog</a></li>
              <li><a className={styles.link} href="#careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.links}>
              <li><a className={styles.link} href="#contact">Contact</a></li>
              <li><a className={styles.link} href="#faq">FAQ</a></li>
              <li><a className={styles.link} href="#policy">Privacy Policy</a></li>
              <li><a className={styles.link} href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <div className={styles.newsletter}>
              <p>Get travel tips, exclusive deals, and updates.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input className={styles.input} type="email" placeholder="Your email address" />
                <button className={styles.btn} type="submit">Subscribe</button>
              </form>
              <div className={styles.disclaimer}>We respect your privacy. Unsubscribe anytime.</div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <div>© {new Date().getFullYear()} Egypt Tours Gate. All rights reserved.</div>
          <div className={styles.bottomLinks}>
            <a className={styles.bottomLink} href="#policy">Privacy</a>
            <a className={styles.bottomLink} href="#terms">Terms</a>
            <a className={styles.bottomLink} href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
