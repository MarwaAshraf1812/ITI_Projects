import { Component } from "react";
import './Carsoul.css';

class Carsoul extends Component {
  constructor() {
    super();
    this.state = {
      currentIdx: 0,
    };
    this.slider = [
      {
        title: "The Future of AI: What to Expect in 2025",
        excerpt: "Artificial Intelligence is evolving rapidly. Here's a look at the breakthroughs expected to reshape the tech landscape in the coming years.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        date: "Oct 12, 2024",
        category: "Artificial Intelligence"
      },
      {
        title: "Quantum Computing Achieves New Milestone",
        excerpt: "Researchers have successfully stabilized qubits at room temperature, bringing us one step closer to mainstream quantum computers.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        date: "Oct 10, 2024",
        category: "Computing"
      },
      {
        title: "Cybersecurity Threats on the Rise for IoT Devices",
        excerpt: "As smart home devices become ubiquitous, security experts warn of new vulnerabilities that could expose user data.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        date: "Oct 08, 2024",
        category: "Cybersecurity"
      }
    ];
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.slideInterval = setInterval(this.nextSlide, 5000);
  }

  stopSlider = () => {
    if(this.slideInterval) clearInterval(this.slideInterval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIdx: (prevState.currentIdx + 1) % this.slider.length
    }));
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIdx: prevState.currentIdx === 0 ? this.slider.length - 1 : prevState.currentIdx - 1
    }));
  }

  render() {
    const { currentIdx } = this.state;

    return (
      <section 
        className="hero-slider" 
        aria-label="Featured story"
        onMouseEnter={this.stopSlider}
        onMouseLeave={this.startSlider}
      >
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {this.slider.map((slide, idx) => (
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
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-btn prev-btn" onClick={this.prevSlide} aria-label="Previous slide">&#10094;</button>
        <button className="slider-btn next-btn" onClick={this.nextSlide} aria-label="Next slide">&#10095;</button>
        
        <div className="slider-dots">
          {this.slider.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIdx === idx ? 'active' : ''}`}
              onClick={() => this.setState({ currentIdx: idx })}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>
    );
  }
}

export default Carsoul;