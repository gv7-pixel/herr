/**
 * Core constants for the romantic birthday surprise website
 * Recipient: Neha | Birthday: November 6, 2026 (Asia/Kolkata)
 */

export const RECIPIENT_NAME = 'Neha';

// Asia/Kolkata timezone is UTC+05:30.
// Target: November 6, 2026 at 12:00 AM (00:00:00 IST)
export const TARGET_BIRTHDAY_TIMEZONE = 'Asia/Kolkata';
export const TARGET_BIRTHDAY = '2026-11-06T00:00:00+05:30';

export const INVITATION_COPY = {
  envelopeLabel: 'A little something for Neha.',
  greeting: 'Hey Neha...',
  message: 'Someone has kept a little surprise just for you.',
  ctaButton: 'Open your surprise',
  sealHint: 'Tap the wax seal to open',
};

export const WELCOME_COPY = {
  headline: 'Welcome to your little world, Neha.',
  subtext: 'A little collection of memories, moments, music, and everything I wanted to keep just for you.',
};

export const BIRTHDAY_GREETING_COPY = {
  headline: 'Happy Birthday, Neha! ♡',
  subtext: 'Today is all about you.',
  celebrationNote: 'Every memory, song, and letter in this little world was made to celebrate the wonder of you.',
};

export const FEATURED_PHOTO_META = {
  caption: 'The ocean was beautiful, but my favourite view was beside me.',
  attribution: '— A little memory of us',
};

export const MUSIC_META = {
  title: 'I Wanna Be Yours',
  artist: 'Arctic Monkeys',
  audioPath: '/assets/audio/i-wanna-be-yours.mp3',
};

export const SECTION_KEYS = {
  ENVELOPE_INTRO: 'envelope-intro',
  COUNTDOWN: 'countdown',
  MEMORIES: 'memories',
  FEATURED_PHOTO: 'featured-photo',
  LETTERS: 'letters',
  OUR_SONG: 'our-song',
  FINAL_ENVELOPE: 'final-envelope',
};

export const SECTIONS_SEQUENCE = [
  {
    id: SECTION_KEYS.ENVELOPE_INTRO,
    title: 'Vintage sealed envelope',
    subtitle: 'A little something for Neha.',
  },
  {
    id: SECTION_KEYS.COUNTDOWN,
    title: 'Welcome screen + birthday countdown',
    subtitle: 'November 6, 2026',
  },
  {
    id: SECTION_KEYS.MEMORIES,
    title: 'A little collection of memories',
    subtitle: 'Personal photographs',
  },
  {
    id: SECTION_KEYS.FEATURED_PHOTO,
    title: 'The photograph',
    subtitle: 'A little memory of us',
  },
  {
    id: SECTION_KEYS.LETTERS,
    title: 'Open when you feel...',
    subtitle: 'Interactive personal letters',
  },
  {
    id: SECTION_KEYS.OUR_SONG,
    title: 'Our song',
    subtitle: 'I Wanna Be Yours — Arctic Monkeys',
  },
  {
    id: SECTION_KEYS.FINAL_ENVELOPE,
    title: 'Final sealed envelope',
    subtitle: 'A handwritten-style birthday letter',
  },
];
