import styles from './AiWorkflow.module.css';

const practices = [
    [
        '01',
        '✎',
        'Draft & prototype',
        'Turn a rough idea or ticket into a first fast pass, so I can spend my time refining instead of starting from a blank page.',
        'pink',
    ],
    [
        '02',
        '⚙',
        'Debug & refactor',
        'Pair with AI to trace tricky bugs, untangle legacy code, or add test coverage without losing time to boilerplate.',
        'yellow',
    ],
    [
        '03',
        '⌕',
        'Learn & explore',
        'Get up to speed on unfamiliar codebases and APIs quickly.',
        'teal',
    ],
    [
        '04',
        '⬡',
        'Build & reuse',
        'Package repeatable workflows into custom skills and MCP servers, so a good process is available next time instead of rebuilt from scratch.',
        'coral',
    ],
    [
        '05',
        '✓',
        'Review & decide',
        'Every suggestion gets read, questioned, and rewritten if needed. I stay accountable for what ships, AI or not.',
        'green',
    ],
] as const;

const tools = ['Claude Code', 'Codex', 'Cursor', 'SKILLS', 'mcp'];

const toCommand = (title: string) =>
    title
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

export default function AiWorkflow() {
    return (
        <section
            id="ai"
            className={styles.section}
            aria-labelledby="ai-workflow-heading"
        >
            <div className={styles.wrapper}>
                <div className={styles.terminal}>
                    <div className={styles.titlebar}>
                        <div className={styles.dots}>
                            <span className={styles.dotPink} />
                            <span className={styles.dotYellow} />
                            <span className={styles.dotGreen} />
                        </div>
                        <span className={styles.filename}>
                            working-with-ai.sh
                        </span>
                        <span className={styles.status}>
                            ● human in the loop
                        </span>
                    </div>
                    <div className={styles.body}>
                        <p className={styles.comment}># In my process</p>
                        <h2 id="ai-workflow-heading" className={styles.title}>
                            Working with AI<span>.</span>
                        </h2>
                        <p className={styles.lead}>
                            AI is part of my tools but not a replacement for
                            judgment. Here is how I actually use it day to
                            day.
                        </p>
                        <ul className={styles.log}>
                            {practices.map(
                                ([number, symbol, title, text, color]) => (
                                    <li className={styles.entry} key={title}>
                                        <div className={styles.prompt}>
                                            <span className={styles.chevron}>
                                                $
                                            </span>
                                            <span className={styles.command}>
                                                {toCommand(title)}
                                            </span>
                                            <span className={styles.index}>
                                                [{number}]
                                            </span>
                                        </div>
                                        <div
                                            className={`${styles.output} ${styles[color]}`}
                                        >
                                            <span className={styles.symbol}>
                                                {symbol}
                                            </span>
                                            <div>
                                                <b>{title}</b>
                                                <p>{text}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className={styles.toolsPrompt}>
                            <span className={styles.chevron}>$</span>
                            <span className={styles.command}>
                                tools --active
                            </span>
                            <span className={styles.cursor} />
                        </div>
                        <ul className={styles.tools}>
                            {tools.map((tool) => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
