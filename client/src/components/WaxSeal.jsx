import React from 'react';

/**
 * WaxSeal Component
 * Realistic Burgundy wax seal with embossed heart detail.
 * Supports smooth unsealing animation, keyboard accessibility (Enter/Space),
 * and disengagement states.
 */
export default function WaxSeal({
  onClick,
  isBreaking = false,
  isBroken = false,
  label = 'Vintage wax seal',
  className = '',
  disabled = false,
}) {
  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled && !isBreaking && !isBroken) {
      e.preventDefault();
      onClick?.(e);
    }
  };

  return (
    <button
      type="button"
      className={`wax-seal interactive-press ${isBreaking ? 'wax-seal-breaking' : ''} ${isBroken ? 'wax-seal-broken' : ''} ${className}`}
      onClick={disabled || isBreaking || isBroken ? undefined : onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || isBreaking || isBroken}
      aria-label={label}
      title={label}
      tabIndex={isBroken ? -1 : 0}
    >
      <span className="wax-seal-heart" aria-hidden="true">&hearts;</span>
    </button>
  );
}
