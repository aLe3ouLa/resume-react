import 'highlight.js/styles/github-dark.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/fragments/page';
import Wrapper from '../components/fragments/wrapper';
import { getPostBySlug } from '../data/blogPosts';
import { renderMarkdown } from '../utils/markdown';
import {
    ArticleWrapper,
    BackLink,
    ArticleTitle,
    MetaRow,
    Tag,
    DateText,
    Content,
    NotFound,
    BlogSection,
} from '../components/blocks/blog/blog.styles';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;
    const [html, setHtml] = useState('');

    // Load and render the markdown body.
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

    // BlogPosting structured data.
    useEffect(() => {
        if (!post) return;
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            keywords: post.tags.join(', '),
            author: { '@type': 'Person', name: 'Alexandra Barka' },
            url: `https://ale3oula.github.io/blog/${post.slug}`,
        });
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [post]);

    if (!post) {
        return (
            <Page>
                <BlogSection>
                    <Wrapper>
                        <NotFound>
                            Tidbit not found.
                            <br />
                            <BackLink to="/blog">← Back to all tidbits</BackLink>
                        </NotFound>
                    </Wrapper>
                </BlogSection>
            </Page>
        );
    }

    return (
        <Page>
            <BlogSection>
                <Wrapper>
                    <ArticleWrapper>
                        <BackLink to="/blog">← All tidbits</BackLink>
                        <ArticleTitle>{post.title}</ArticleTitle>
                        <MetaRow>
                            <DateText dateTime={post.date}>
                                {formatDate(post.date)}
                            </DateText>
                            {post.tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </MetaRow>
                        <Content dangerouslySetInnerHTML={{ __html: html }} />
                    </ArticleWrapper>
                </Wrapper>
            </BlogSection>
        </Page>
    );
};

export default BlogPost;
