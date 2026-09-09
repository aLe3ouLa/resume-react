import cv from '../../assets/cv.pdf';
import { trackEvent } from '../../lib/analytics';
import profile from '../../assets/Profile.jpeg';

import styles from './Hero.module.css';
import common from '../../App.module.css';

export const Hero = () => {
    return (
        <section className={`${styles.hero} ${common.container}`}>
            <div>
                <p className={common.eyebrow}>
                    <i /> Alexandra Barka · Senior Product Engineer
                </p>
                <h1>
                    Making the web <span>a little better each day.</span>
                </h1>
                <p className={styles.lead}>
                    I help SaaS, startups, and scale-ups build accessible
                    products and turn their components into reusable design
                    systems, drawing on ten years of frontend engineering.
                    Currently open to full-time roles and freelance
                    collaborations.
                </p>
                <a
                    className={styles.link}
                    href={cv}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent('resume_download_click')}
                >
                    Download résumé ↓
                    <span className={styles.visuallyHidden}>
                        (opens in a new tab)
                    </span>
                </a>
            </div>
            <div className={styles.portrait}>
                <div>
                    <img
                        src={profile}
                        alt="Photo of Alexandra Barka in Lisbon"
                    />
                    <strong>✦ Engineer / maker</strong>
                </div>
            </div>
        </section>
    );
};
