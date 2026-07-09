import ColoredSpan from './ColoredSpan';

export const SectionHeader = ({ id, text }: { id: string; text: string }) => {
    return (
        <h2
            id={id}
            className="text-center text-[2.4rem] font-bold mb-[3rem] md:text-[3rem]"
        >
            {text} <ColoredSpan>.</ColoredSpan>
        </h2>
    );
};
