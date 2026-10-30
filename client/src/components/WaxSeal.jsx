import React from 'react';

/**
 * WaxSeal Component
 * Realistic Vintage Burgundy wax seal with embossed heart detail.
 * Accessible with role and label, gentle hover tilt and press feedback.
 */
export default function WaxSeal({ onClick, label = 'Vintage wax seal', className = '' }) {
  return (
    <button
      type="button"
      className={`wax-seal interactive-press ${className}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <span className="wax-seal-heart" aria-hidden="true">&hearts;</span>
    </button>
  );
}
