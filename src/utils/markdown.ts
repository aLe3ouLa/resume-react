import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

// Configured markdown renderer with highlight.js syntax highlighting.
const md: MarkdownIt = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre class="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true })
                        .value +
                    '</code></pre>'
                );
            } catch (_) {
                /* fall through to escaped output */
            }
        }
        return (
            '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        );
    },
});

export const renderMarkdown = (source: string): string => md.render(source);

// Highlight a bare code snippet (used for the tidbit card previews).
export const highlightCode = (code: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(code, { language: lang, ignoreIllegals: true })
                .value;
        } catch (_) {
            /* fall through */
        }
    }
    return md.utils.escapeHtml(code);
};
