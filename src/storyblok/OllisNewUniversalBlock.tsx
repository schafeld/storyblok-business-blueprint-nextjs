"use client";
import React from 'react';
import { SbBlokData } from '@storyblok/react/rsc';


import type { AssetContent } from '../delivery-api';

interface OllisNewUniversalBlockProps {
  blok: SbBlokData & {
    text?: string;
    image?: AssetContent;
  };
}


const OllisNewUniversalBlock: React.FC<OllisNewUniversalBlockProps> = ({ blok }) => {
  const [scale, setScale] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);

  return (
    <div className="ollis-new-universal-block">
      {blok.text && <p>{blok.text}</p>}
      {blok.image?.filename && (
        <div
          style={{
            width: '300px', // fixed width
            height: '300px', // fixed height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: '#f8f8f8',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
          <img
            src={blok.image.filename}
            alt={blok.image.alt || 'Image'}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transition: 'transform 0.2s',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
      )}
      {blok.image?.filename && (
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Scale: {scale.toFixed(2)}
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.01}
              value={scale}
              onChange={e => setScale(Number(e.target.value))}
              style={{ width: '200px', marginLeft: '1rem' }}
            />
          </label>
          <br />
          <label>
            Rotation: {rotation}°
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={rotation}
              onChange={e => setRotation(Number(e.target.value))}
              style={{ width: '200px', marginLeft: '1rem' }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default OllisNewUniversalBlock;
