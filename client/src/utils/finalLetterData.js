/**
 * Centralized, editable content for Neha's final birthday letter (Section 7).
 * All paragraphs and metadata are easily editable here without touching JSX or styles.
 */

export const FINAL_LETTER_DATA = {
  // Envelope exterior handwritten labels
  envelopeTag: 'Keepsake Letter',
  envelopePrompt: 'One last thing, Neha...',
  envelopeRecipient: 'To my dearest Neha, with all my love',
  envelopeSealHint: 'Tap the wax seal to unseal your letter',
  postmarkCity: 'HERR',
  postmarkDate: '06 NOV 2026',

  // Interior Letter Content
  date: '6 Nov 2026',
  salutation: 'To my Neha, ♡',
  birthdayWish: 'Happiest birthday, di ♡',
  paragraphs: [
    'Looking back at last year, on your birthday we were just best friends... sharing silly jokes, talking about everything, and never knowing how beautifully life was going to turn around. And now, on this November 6th, I get to hold your hand and wish you as my girlfriend. It honestly feels like the sweetest miracle, and it still feels so surreal and special to say it out loud.',
    'Ever since February 14, 2026, when we officially started this journey together, my whole world has felt warmer and so much brighter. Having you in my life has made me realize what truly matters. You are without a doubt one of the best things that has ever happened to me, di. Your laugh, your little stories, the way your eyes light up when you are happy — every single moment with you is something I treasure deeply.',
    "I want you to know how grateful I am for us, Neha. Through all the good days where everything is light and easy, through the difficult, overwhelming days when life gets heavy, and everything in between — I'm right here with you. No matter what comes our way, I'm never letting go of your hand. I want this — us — for a lifetime, until my very last breath. Sari ah?",
    'Thank you for being so patient with me, for understanding me even when I do not say much, and for just being unapologetically you. You make my days easier, my heart fuller, and my life infinitely more meaningful. On your special day, I just want you to feel deeply loved, cherished, and celebrated.',
    'I hope this year brings you peace, boundless smiles, and all the quiet happiness your kind heart deserves. Keep that bright, beautiful smile on your face, always.',
  ],
  closing: 'I love you, Neha ♡',
  signature: 'Yours, Kannan V ♡',
  authorName: 'Kannan V',

  // Audio companion texts
  musicPlayingText: 'Playing softly: I Wanna Be Yours — Arctic Monkeys',
  musicPromptText: 'Play our song softly while reading',

  // Controls
  foldBackBtn: 'Fold letter back into envelope',
  reopenBtn: 'Unseal letter again',
};
