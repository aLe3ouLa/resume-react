import { useEffect } from 'react';
import Page from '../components/fragments/page';
import Wrapper from '../components/fragments/wrapper';
import { BLOG_POSTS } from '../data/blogPosts';
import { highlightCode } from '../utils/markdown';
import {
    CARD_COLORS,
    BlogSection,
    HeaderBlock,
    BlogTitle,
    BlogSubtitle,
    Grid,
    Card,
    LangBadge,
    CodeWindow,
    WindowBar,
    FileName,
    Snippet,
    CardBody,
    CardTitle,
    CardExcerpt,
    TagRow,
    Tag,
    DateText,
} from '../components/blocks/blog/blog.styles';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

// Fun label + filename per language for the card's "code image".
const LANG_META: Record<string, { label: string; file: string }> = {
    javascript: { label: 'JS', file: 'tidbit.js' },
    typescript: { label: 'TS', file: 'tidbit.ts' },
    css: { label: 'CSS', file: 'styles.css' },
    html: { label: 'HTML', file: 'index.html' },
};

const metaFor = (lang: string) =>
    LANG_META[lang] ?? { label: lang.toUpperCase(), file: `snippet.${lang}` };

const Blog = () => {
    useEffect(() => {
        document.title = 'Tidbits — Alexandra Barka';
    }, []);

    return (
        <Page>
            <BlogSection>
                <Wrapper>
                    <HeaderBlock>
                        <BlogTitle>Tidbits</BlogTitle>
                        <BlogSubtitle>
                            Bite-sized dev notes on JavaScript, CSS &amp; more.
                        </BlogSubtitle>
                    </HeaderBlock>

                    <Grid>
                        {BLOG_POSTS.map((post, i) => {
                            const meta = metaFor(post.language);
                            return (
                                <Card
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    $accent={
                                        CARD_COLORS[i % CARD_COLORS.length]
                                    }
                                >
                                    <LangBadge className="lang-badge">
                                        {meta.label}
                                    </LangBadge>
                                    <CodeWindow>
                                        <WindowBar>
                                            <span />
                                            <span />
                                            <span />
                                            <FileName>{meta.file}</FileName>
                                        </WindowBar>
                                        <Snippet>
                                            <code
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightCode(
                                                        post.snippet,
                                                        post.language
                                                    ),
                                                }}
                                            />
                                        </Snippet>
                                    </CodeWindow>
                                    <CardBody>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardExcerpt>
                                            {post.excerpt}
                                        </CardExcerpt>
                                        <TagRow>
                                            {post.tags.map((t) => (
                                                <Tag key={t}>{t}</Tag>
                                            ))}
                                        </TagRow>
                                        <DateText dateTime={post.date}>
                                            {formatDate(post.date)}
                                        </DateText>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </Grid>
                </Wrapper>
            </BlogSection>
        </Page>
    );
};

export default Blog;
