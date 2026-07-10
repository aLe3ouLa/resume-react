import { useEffect, useState } from 'react';
import { SectionHeader } from '../../../design-system/components/SectionHeader/SectionHeader';
import { SectionSubtitle } from '../../../design-system/components/SectionSubtitle/SectionSubtitle';
import Wrapper from '../../fragments/wrapper';
import dbData from '../../../data/db.json';
import {
    SectionContainer,
    HeaderSection,
    FormCard,
    Input,
    Textarea,
    SubmitButton,
    NotesWall,
    Note,
    NoteMessage,
    NoteAuthor,
    StackPile,
    ShowLessButton,
} from './comments.styles';

// Notes shown before the rest collapse into a stacked pile.
const VISIBLE_COUNT = 5;

interface Comment {
    id: string;
    name: string;
    message: string;
    createdAt: string;
}

// Local json-server API (run `npm run server`).
const API_URL = 'http://localhost:4000/comments';

// When the server isn't reachable (e.g. the deployed GitHub Pages site),
// comments fall back to this device's localStorage + the seed notes below.
const STORAGE_KEY = 'guestbook-comments';
const seed = (dbData as { comments: Comment[] }).comments;

// Sticky-note palette + tilt angles, chosen deterministically per note so the
// wall looks hand-pinned but stays stable across re-renders.
const NOTE_COLORS = ['#FFF3A3', '#FFC9DE', '#C9F0FF', '#D6FFC9', '#FFDCC9'];
const NOTE_ROTATIONS = ['-3deg', '2deg', '-1.5deg', '3deg', '-2.5deg', '1deg'];

const byNewest = (a: Comment, b: Comment) =>
    b.createdAt.localeCompare(a.createdAt);

const loadStored = (): Comment[] => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Comment[]) : [];
    } catch {
        return [];
    }
};

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [serverUp, setServerUp] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Try the local DB first; fall back to localStorage + seed if it's down.
    // Runs after mount so it doesn't interfere with the react-snap prerender.
    useEffect(() => {
        let active = true;
        (async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = (await res.json()) as Comment[];
                if (active) {
                    setComments([...data].sort(byNewest));
                    setServerUp(true);
                }
            } catch {
                if (active) {
                    setComments([...loadStored(), ...seed].sort(byNewest));
                    setServerUp(false);
                }
            }
        })();
        return () => {
            active = false;
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedMessage = message.trim();
        if (!trimmedMessage || submitting) return;

        const newComment: Comment = {
            id: `c-${trimmedMessage.length}-${trimmedMessage.slice(0, 8)}-${comments.length}`,
            name: name.trim() || 'Anonymous',
            message: trimmedMessage,
            createdAt: new Date().toISOString(),
        };

        setSubmitting(true);
        if (serverUp) {
            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newComment),
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const saved = (await res.json()) as Comment;
                setComments((prev) => [saved, ...prev]);
            } catch {
                // Server dropped mid-session — keep the note locally so the
                // visitor doesn't lose what they wrote.
                persistLocally(newComment);
            }
        } else {
            persistLocally(newComment);
        }

        setName('');
        setMessage('');
        setSubmitting(false);
    };

    const persistLocally = (comment: Comment) => {
        const nextStored = [comment, ...loadStored()];
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStored));
        } catch {
            // Storage full/blocked (private mode) — still show it this session.
        }
        setComments((prev) => [comment, ...prev]);
    };

    return (
        <SectionContainer aria-labelledby="comments-heading">
            <Wrapper>
                <HeaderSection>
                    <SectionHeader id="comments-heading" text="Guestbook" />

                    <SectionSubtitle className="italic leading-[1.5] mb-lg tablet:mb-md">
                        Leave a note and pin it to the wall 📌
                    </SectionSubtitle>
                </HeaderSection>

                <FormCard onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Your name (optional)"
                        value={name}
                        maxLength={40}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your name"
                    />
                    <Textarea
                        placeholder="Write something nice…"
                        value={message}
                        maxLength={280}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-label="Your message"
                        required
                    />
                    <SubmitButton
                        type="submit"
                        disabled={!message.trim() || submitting}
                    >
                        {submitting ? 'Pinning…' : 'Pin it 📌'}
                    </SubmitButton>
                </FormCard>

                <NotesWall>
                    {(expanded
                        ? comments
                        : comments.slice(0, VISIBLE_COUNT)
                    ).map((comment, index) => (
                        <Note
                            key={comment.id}
                            $bg={NOTE_COLORS[index % NOTE_COLORS.length]}
                            $rotate={
                                NOTE_ROTATIONS[index % NOTE_ROTATIONS.length]
                            }
                        >
                            <NoteMessage>{comment.message}</NoteMessage>
                            <NoteAuthor>— {comment.name}</NoteAuthor>
                        </Note>
                    ))}

                    {!expanded && comments.length > VISIBLE_COUNT && (
                        <StackPile
                            count={comments.length - VISIBLE_COUNT}
                            onClick={() => setExpanded(true)}
                        />
                    )}
                </NotesWall>

                {expanded && comments.length > VISIBLE_COUNT && (
                    <ShowLessButton onClick={() => setExpanded(false)}>
                        Show less
                    </ShowLessButton>
                )}
            </Wrapper>
        </SectionContainer>
    );
};

export default Comments;
