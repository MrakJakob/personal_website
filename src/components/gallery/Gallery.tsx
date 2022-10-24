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
    <div className="gallery_root">
      <div className="heading">Gallery of my dall-e generated digital images</div>
      <div className="gallery">

     
      {docs.map((image) => (
        <div className="image_container">
          <LazyLoadImage
            src={image.url}
            className="gallery_image"
          ></LazyLoadImage>
        </div>
      ))}
       </div>
    </div>
  );
}
