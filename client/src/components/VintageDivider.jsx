import React from 'react';

/**
 * VintageDivider Component
 * Delicate divider line with centered romantic accent symbol.
 */
export default function VintageDivider({ symbol = '✦', className = '' }) {
  return (
    <div className={`vintage-divider ${className}`} aria-hidden="true">
      <span className="vintage-divider-symbol">{symbol}</span>
    </div>
  );
}
