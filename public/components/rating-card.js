class RatingCard extends HTMLElement {
  constructor() {
    super();

    // default attributes
    this.rating = this.getAttribute('rating') || '4.3';
    this.year = this.getAttribute('year') || '2024';
    this.brand = this.getAttribute('brand') || 'Brand';
    this.subtitle = this.getAttribute('subtitle') || 'Customer Ratings';
    this.award = this.getAttribute('award') || "Customers' Choice";


    this.innerHTML = `
     <div class="backdrop">
      <div class="rating-card">
          <div class="card-header">
            <div class="card-logo-container">
              <img src="./static/images/card/gartner.png" alt="Gartner Logo" class="card-logo">
            </div>
          </div>
          <div class="divider"></div>
          <div class="card-rating">
            <div class="rating-value">${this.rating}</div>
            <div class="stars">
              ${'★'.repeat(Math.round(parseFloat(this.rating)))}${'☆'.repeat(5 - Math.round(parseFloat(this.rating)))}
            </div>
          </div>
        </div>
    </div>
    `;
  }
}

customElements.define('rating-card', RatingCard);