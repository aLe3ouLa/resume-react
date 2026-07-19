import Wrapper from '../../fragments/wrapper';
import {
    BenchHeader,
    BenchIntro,
    Materials,
    Pegboard,
    SectionContainer,
    Tool,
    ToolIcon,
    Tools,
} from './tech-stack.styles';

const tools = [
    {
        number: '01',
        name: 'Shape',
        description: 'Turn ideas and user needs into clear, useful interfaces.',
        color: 'secondary',
        symbol: '◒',
    },
    {
        number: '02',
        name: 'Measure',
        description: 'Check accessibility, usability, performance, and quality.',
        color: 'tertiary',
        symbol: '↔',
    },
    {
        number: '03',
        name: 'Build',
        description: 'Create resilient systems that are readable and ready to evolve.',
        color: 'primary',
        symbol: '⌘',
    },
    {
        number: '04',
        name: 'Refine',
        description: 'Test assumptions, remove friction, and improve the details.',
        color: 'accent',
        symbol: '✦',
    },
    {
        number: '05',
        name: 'Connect',
        description: 'Collaborate openly and bring different disciplines together.',
        color: 'coral',
        symbol: '◎',
    },
] as const;

const materials = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'APIs',
    'GraphQL',
    'Testing',
    'Design systems',
];

const TechStack = () => (
    <SectionContainer aria-labelledby="workbench-heading">
        <Wrapper>
            <BenchHeader>
                <div>
                    <span>My working kit</span>
                    <h2 id="workbench-heading">The workbench<span>.</span></h2>
                </div>
                <BenchIntro>
                    Good work is not defined by one tool. It comes from knowing
                    what to use, what to question, and what to improve.
                </BenchIntro>
            </BenchHeader>

            <Pegboard>
                <div className="bench-rail" aria-hidden="true">
                    <span>AB</span>
                    <span>TOOLS FOR THOUGHTFUL DIGITAL WORK</span>
                </div>

                <Tools>
                    {tools.map((tool) => (
                        <Tool key={tool.name} className={`tool-${tool.color}`}>
                            <ToolIcon aria-hidden="true">{tool.symbol}</ToolIcon>
                            <div>
                                <span>{tool.number}</span>
                                <h3>{tool.name}</h3>
                                <p>{tool.description}</p>
                            </div>
                        </Tool>
                    ))}
                </Tools>

                <Materials>
                    <div>
                        <span>Materials drawer</span>
                        <p>A flexible toolkit, chosen to suit the work.</p>
                    </div>
                    <ul>
                        {materials.map((material) => <li key={material}>{material}</li>)}
                    </ul>
                </Materials>
            </Pegboard>
        </Wrapper>
    </SectionContainer>
);

export default TechStack;
