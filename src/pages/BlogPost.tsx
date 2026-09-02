import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import 'highlight.js/styles/github-dark.css';
import appStyles from '../App.module.css';
import styles from './BlogPost.module.css';
import { getPostBySlug } from '../data/blogPosts';
import { renderMarkdown } from '../utils/markdown';
import { blogPostRoute } from '../router';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

export default function BlogPost() {
    const { slug } = blogPostRoute.useParams();
    const post = getPostBySlug(slug);
    const [html, setHtml] = useState('');

    useEffect(() => {
        if (!post) return;
        document.title = `${post.title} — Alexandra Barka`;
        let active = true;
        fetch(`/blog/${post.slug}.md`)
            .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
            .then((text) => {
                if (active) setHtml(renderMarkdown(text));
            })
            .catch(() => {
                if (active) setHtml('<p>Could not load this article.</p>');
            });
        return () => {
            active = false;
        };
    }, [post]);

    if (!post) {
        return (
            <main className={`${appStyles.section} ${appStyles.container}`}>
                <p className={styles.notFound}>
                    Tidbit not found.
                    <br />
                    <Link className={styles.back} to="/blog">
                        ← Back to all tidbits
                    </Link>
                </p>
            </main>
        );
    }

    return (
        <main className={`${appStyles.section} ${appStyles.container}`}>
            <article className={styles.article}>
                <Link className={styles.back} to="/blog">
                    ← All tidbits
                </Link>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <time className={styles.date} dateTime={post.date}>
                        {formatDate(post.date)}
                    </time>
                    {post.tags.map((t) => (
                        <span key={t} className={styles.tag}>
                            {t}
                        </span>
                    ))}
                </div>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <p className={styles.replyNote}>
                    My blog doesn't support comments yet, but you can reply via{' '}
                    <a href="mailto:barka.alexandra2@gmail.com">e-mail</a>.
                </p>
            </article>
        </main>
    );
}
