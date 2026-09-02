import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import 'highlight.js/styles/github-dark.css';
import appStyles from '../App.module.css';
import styles from './Blog.module.css';
import { BLOG_POSTS } from '../data/blogPosts';
import { highlightCode } from '../utils/markdown';

const CARD_COLORS = ['#8c9eec', '#f6a6d6', '#ffce2e', '#2ea84f', '#e0399b'];
const LANG_META: Record<string, { label: string; file: string }> = {
  javascript: { label: 'JS', file: 'tidbit.js' },
  typescript: { label: 'TS', file: 'tidbit.ts' },
  css: { label: 'CSS', file: 'styles.css' },
  html: { label: 'HTML', file: 'index.html' },
};
const metaFor = (lang: string) => LANG_META[lang] ?? { label: lang.toUpperCase(), file: `snippet.${lang}` };
const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function Blog() {
  useEffect(() => { document.title = 'Tidbits — Alexandra Barka'; }, []);

  return <main className={`${appStyles.section} ${appStyles.container}`}>
    <header className={appStyles.sectionHeader}><div><small>Bite-sized dev notes</small><h2>Tidbits<span>.</span></h2></div><p>Bite-sized dev notes on JavaScript, CSS &amp; more.</p></header>
    <div className={styles.grid}>
      {BLOG_POSTS.map((post, i) => {
        const meta = metaFor(post.language);
        return <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className={styles.card} style={{ background: CARD_COLORS[i % CARD_COLORS.length] }}>
          <span className={styles.badge}>{meta.label}</span>
          <div className={styles.window}>
            <div className={styles.windowBar}><span /><span /><span /><span className={styles.fileName}>{meta.file}</span></div>
            <pre className={styles.snippet}><code dangerouslySetInnerHTML={{ __html: highlightCode(post.snippet, post.language) }} /></pre>
          </div>
          <div className={styles.body}>
            <h2>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <ul className={styles.tags}>{post.tags.map(t => <li key={t} className={styles.tag}>{t}</li>)}</ul>
            <time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </Link>;
      })}
    </div>
  </main>;
}
