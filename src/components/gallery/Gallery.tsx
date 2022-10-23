import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useFirestore } from "../../hooks/useFirestore";
import "./Gallery.css"

type GalleryProps = {
  setGradient: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Gallery({ setGradient }: GalleryProps) {
  useEffect(() => {
    setGradient(false);
  }, []);

  const { docs } = useFirestore("gallery");

  return (
    <div className="gallery">
      {docs.map((image) => (
        <div className="image_container">
          <LazyLoadImage
            src={image.url}
            width="300"
            className="gallery_image"
          ></LazyLoadImage>
        </div>
      ))}
    </div>
  );
}
