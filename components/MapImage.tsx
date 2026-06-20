"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MapImageProps {
  className?: string;
}

export default function MapImage({ className = "" }: MapImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const cachedImage = localStorage.getItem('map-image-url');
    const cachedTimestamp = localStorage.getItem('map-image-timestamp');
    const cacheExpiry = 24 * 60 * 60 * 1000;

    if (cachedImage && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp);
      if (Date.now() - timestamp < cacheExpiry) {
        setImageUrl(cachedImage);
        setLoading(false);
        return;
      }
    }

    generateMapImage();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const generateMapImage = async () => {
    try {
      setLoading(true);
      setError(null);

      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/generate-map-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ size: "1792x1024", quality: "hd" }),
        signal: abortControllerRef.current.signal,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to generate map image');
      }

      if (data.image) {
        setImageUrl(data.image);
        localStorage.setItem('map-image-url', data.image);
        localStorage.setItem('map-image-timestamp', Date.now().toString());
      } else {
        throw new Error('No image URL in response');
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'Failed to generate map');
      setImageUrl('/images/map-ui.svg');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-surface-dim ${className}`}>
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="font-label-tech text-label-tech text-outline uppercase">
            Generating Navigation Map...
          </p>
        </div>
      </div>
    );
  }

  if (error && !imageUrl) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-surface-dim ${className}`}>
        <div className="flex flex-col items-center gap-4 p-md text-center">
          <span className="material-symbols-outlined text-error text-5xl">error</span>
          <p className="font-label-tech text-label-tech text-error uppercase">
            Map Generation Failed
          </p>
          <p className="text-sm text-outline">{error}</p>
          <motion.button
            className="bg-secondary text-primary px-lg py-sm font-label-tech uppercase rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateMapImage}
          >
            Retry
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.img
      src={imageUrl || '/images/map-ui.svg'}
      alt="Navigation Map with Route"
      className={`w-full h-full object-cover ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
