/**
 * Core constants for the romantic birthday surprise website
 * Recipient: Neha | Birthday: November 6, 2026
 */

export const RECIPIENT_NAME = 'Neha';
export const TARGET_BIRTHDAY = '2026-11-06T00:00:00';

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
