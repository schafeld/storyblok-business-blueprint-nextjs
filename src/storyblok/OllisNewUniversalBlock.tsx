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
  return (
    <div className="ollis-new-universal-block">
      {blok.text && <p>{blok.text}</p>}
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || 'Image'}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default OllisNewUniversalBlock;
