import React, { useState } from 'react';

export interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = '/img/fotos/hero-principal.jpeg';

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt = 'Más Verdes',
  fallbackSrc = DEFAULT_FALLBACK,
  style,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc || fallbackSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      style={{
        ...style,
        ...(hasError ? { filter: 'saturate(0.9)' } : {}),
      }}
      {...rest}
    />
  );
};
