import React from 'react';

export const SectionContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={`relative overflow-hidden py-xxl bg-[linear-gradient(135deg,#f8f9fa_0%,#ffffff_100%)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[linear-gradient(90deg,#2EA84F_0%,#E0399B_50%,#FFCE2E_100%)] ${className}`.trim()}
        {...props}
    >
        {children}
    </section>
);

export const HeaderSection = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-center mb-xxl animate-fade-in-up ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

// Neo-brutalist form card where visitors write a new note.
export const FormCard = ({
    className = '',
    children,
    ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => (
    <form
        className={`max-w-[600px] mx-auto mb-xxl bg-white rounded-[20px] border-[3px] border-black shadow-[8px_8px_0_#1A1A1A] p-lg flex flex-col gap-md ${className}`.trim()}
        {...props}
    >
        {children}
    </form>
);

export const Input = ({
    className = '',
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        className={`w-full border-[3px] border-black rounded-[12px] p-md text-[1.6rem] text-text outline-none transition-shadow duration-200 focus:shadow-[4px_4px_0_#2EA84F] ${className}`.trim()}
        {...props}
    />
);

export const Textarea = ({
    className = '',
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea
        className={`w-full border-[3px] border-black rounded-[12px] p-md text-[1.6rem] text-text outline-none resize-y min-h-[100px] transition-shadow duration-200 focus:shadow-[4px_4px_0_#E0399B] ${className}`.trim()}
        {...props}
    />
);

export const SubmitButton = ({
    className = '',
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className={`self-start bg-tertiary text-black font-bold text-[1.6rem] py-md px-xl rounded-[12px] border-[3px] border-black shadow-[4px_4px_0_#1A1A1A] cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#1A1A1A] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed ${className}`.trim()}
        {...props}
    >
        {children}
    </button>
);

// Masonry-ish wall of post-it notes.
export const NotesWall = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`max-w-[1000px] mx-auto px-lg grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-xl justify-items-center ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

// A single sticky note. Colour + rotation are passed in so the wall looks hand-pinned.
interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
    $bg: string;
    $rotate: string;
}

export const Note = ({
    className = '',
    children,
    $bg,
    $rotate,
    style,
    ...props
}: NoteProps) => (
    <div
        className={`relative w-full max-w-[260px] min-h-[200px] p-lg font-display shadow-[3px_5px_12px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-out hover:rotate-0 hover:scale-[1.03] hover:z-10 ${className}`.trim()}
        style={{
            backgroundColor: $bg,
            transform: `rotate(${$rotate})`,
            ...style,
        }}
        {...props}
    >
        {children}
    </div>
);

export const NoteMessage = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.8rem] leading-[1.4] text-[#2C2C2C] break-words whitespace-pre-wrap mb-md ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
);

export const NoteAuthor = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`absolute bottom-lg left-lg right-lg text-[1.5rem] font-bold text-[#2C2C2C] ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Collapsed pile shown in place of the 6th+ notes: layered sticky notes with a
// "+N more" label. Clicking expands the full wall.
interface StackPileProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    count: number;
}

export const StackPile = ({
    className = '',
    count,
    ...props
}: StackPileProps) => (
    <button
        type="button"
        aria-label={`Show ${count} more notes`}
        className={`relative w-full max-w-[260px] min-h-[200px] cursor-pointer bg-transparent border-none p-0 group ${className}`.trim()}
        {...props}
    >
        {/* Layered notes behind, to read as a stack. */}
        <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#C9F0FF] shadow-[3px_5px_12px_rgba(0,0,0,0.2)] rotate-[6deg] transition-transform duration-200 group-hover:rotate-[9deg]"
        />
        <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#FFC9DE] shadow-[3px_5px_12px_rgba(0,0,0,0.2)] rotate-[-4deg] transition-transform duration-200 group-hover:rotate-[-6deg]"
        />
        <span className="absolute inset-0 bg-[#FFF3A3] shadow-[3px_5px_12px_rgba(0,0,0,0.2)] rotate-[1.5deg] flex flex-col items-center justify-center font-display text-[#2C2C2C] transition-transform duration-200 group-hover:scale-[1.03]">
            <span className="text-[3.2rem] font-bold leading-none">
                +{count}
            </span>
            <span className="text-[1.6rem] mt-xs">
                more {count === 1 ? 'note' : 'notes'}
            </span>
        </span>
    </button>
);

// Small text toggle to collapse the wall back to 5 notes.
export const ShowLessButton = ({
    className = '',
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        type="button"
        className={`block mx-auto mt-xl bg-transparent border-none cursor-pointer font-display text-[1.6rem] font-bold text-text underline underline-offset-4 decoration-[3px] decoration-tertiary hover:text-hoverPrimary ${className}`.trim()}
        {...props}
    >
        {children}
    </button>
);
