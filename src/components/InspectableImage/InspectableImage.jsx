import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";

function InspectableImage({ src, alt, className = "", children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`clickable-image ${className}`}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <img src={src} alt={alt} />
        {children}
      </div>

      {isOpen && (
        <Lightbox activeImage={{ src, alt }} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default InspectableImage;
