import { Link } from '@tanstack/react-router';
import styles from '../App.module.css';

export default function NotFound() {
  return <main className={`${styles.section} ${styles.container}`} style={{ textAlign: 'center' }}><h1>Page not found<span>.</span></h1><p className={styles.lead} style={{ margin: '0 auto 2rem' }}>The page you're looking for doesn't exist.</p><Link className={styles.button} to="/">Back home</Link></main>;
}
