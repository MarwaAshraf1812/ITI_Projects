import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import './Carsoul.css';

function Carsoul() {
  const { t, i18n } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);

  const slider = useMemo(() => {
    const slides = t('carousel.slides', { returnObjects: true });

    if (!Array.isArray(slides)) {
      return [];
    }

    const images = [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ];
    const dates = ["Oct 12, 2024", "Oct 10, 2024", "Oct 08, 2024"];

    return slides.map((slide, idx) => ({
      ...slide,
      image: images[idx],
      date: dates[idx]
    }));
  }, [t]);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % slider.length);
  }, [slider.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  }, [slider.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const isRTL = i18n.language === 'ar';
  const translateValue = isRTL ? currentIdx * 100 : -(currentIdx * 100);

  return (
    <section
      className="hero-slider"
      aria-label="Featured story"
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {slider.map((slide, idx) => (
          <div className="slide" key={idx}>
            <div className="slide-image-container">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-overlay"></div>
            </div>
            <div className="slide-content">
              <span className="slide-category">{slide.category}</span>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-excerpt">{slide.excerpt}</p>
              <div className="slide-meta">
                <span className="slide-date">{slide.date}</span>
                <button className="read-more-btn">{t('carousel.readMore')}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">&#10094;</button>
      <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next slide">&#10095;</button>

      <div className="slider-dots">
        {slider.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentIdx === idx ? 'active' : ''}`}
            onClick={() => setCurrentIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Carsoul;