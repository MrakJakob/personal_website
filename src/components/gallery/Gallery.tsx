import React, { useEffect } from "react";

type GalleryProps = {
  setGradient: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Gallery({ setGradient }: GalleryProps) {
  useEffect(() => {
    setGradient(false);
  }, []);

  return <div>Gallery</div>;
}
