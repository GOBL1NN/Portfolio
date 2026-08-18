import { useEffect } from "react";
import { X } from "lucide-react";
import "./Lightbox.css";

function Lightbox({ activeImage, onClose }) {
  if (!activeImage) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>
        <img src={activeImage.src} alt={activeImage.alt} />
      </div>
    </div>
  );
}

export default Lightbox;
