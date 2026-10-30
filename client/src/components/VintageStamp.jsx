import React from 'react';

/**
 * VintageStamp Component
 * Perforated postage stamp design with nostalgic postal mark.
 */
export default function VintageStamp({ value = '06', text = 'NOV 2026', postmark = 'HERR &bull; NEHA' }) {
  return (
    <div className="vintage-stamp" aria-hidden="true">
      <div className="stamp-inner">
        <span className="stamp-value">{value}</span>
        <span className="stamp-text">{text}</span>
        <span className="stamp-postmark" dangerouslySetInnerHTML={{ __html: postmark }} />
      </div>
    </div>
  );
}
