class CardsCarousel {
  constructor() {
    this.carouselTrack = document.querySelector('.carousel-track');
    this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
    this.prevBtn = document.querySelector('.carousel-arrow.prev');
    this.nextBtn = document.querySelector('.carousel-arrow.next');
    this.currentIndex = 0;

    this.init();
  }

  init() {
    // Set up initial active slide
    this.updateSlidePosition();
    this.activateSlide(this.currentIndex);

    // Event listeners
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  updateSlidePosition() {
    const slideWidth = this.slides[0].getBoundingClientRect().width;
    this.carouselTrack.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
  }

  activateSlide(index) {
    // Deactivate all slides
    this.slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Activate current slide
    this.slides[index].classList.add('active');

    // Trigger animations
    this.animateTextElements(index);
  }

  animateTextElements(index) {
    const activeSlide = this.slides[index];
    const title = activeSlide.querySelector('.card-title');
    const subtitle = activeSlide.querySelector('.card-subtitle');

    // Reset animations
    title.style.animation = 'none';
    subtitle.style.animation = 'none';
    void title.offsetWidth; // Trigger reflow
    void subtitle.offsetWidth; // Trigger reflow

    // Apply animations
    title.style.animation = 'slideUpFadeIn 0.5s ease forwards 0.5s';
    subtitle.style.animation = 'fadeIn 1s ease forwards 1.5s';
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlidePosition();
    this.activateSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlidePosition();
    this.activateSlide(this.currentIndex);
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CardsCarousel();
});