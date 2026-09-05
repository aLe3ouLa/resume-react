import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);

// Configured markdown renderer with highlight.js syntax highlighting.
const md: InstanceType<typeof MarkdownIt> = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre class="hljs"><code>' +
                    hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true,
                    }).value +
                    '</code></pre>'
                );
            } catch (_) {
                /* fall through to escaped output */
            }
        }
        return (
            '<pre class="hljs"><code>' +
            md.utils.escapeHtml(str) +
            '</code></pre>'
        );
    },
});

export const renderMarkdown = (source: string): string => md.render(source);

// Highlight a bare code snippet (used for the tidbit card previews).
export const highlightCode = (code: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(code, {
                language: lang,
                ignoreIllegals: true,
            }).value;
        } catch (_) {
            /* fall through */
        }
    }
    return md.utils.escapeHtml(code);
};
