class Buy {
  constructor(){
    this.titleProductA = 'Radiant Tee'
    this.descriptionProductA = '#description > .product > .value'
    this.descriptionProductAText = "So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt."
    this.urlProductA = 'https://magento.softwaretestingboard.com/radiant-tee.html'

    this.itemA = 'Radiant Tee'
  }

  get SelectProductA() {
    cy.contains(this.itemA).click()
  }

  get InfoProductAPage() {
    cy.url().should('eq', this.urlProductA);
    cy.contains(this.titleProductA).should('be.visible');
    cy.get(this.descriptionProductA).contains(this.descriptionProductAText);
  }

  get SelectSKU() {
      const sizes = ['XS', 'S', 'M', 'L', 'XL'];
      const sizesRandom = sizes[Math.floor(Math.random() * sizes.length)];
      cy.get('#option-label-size-143-item-168').click();

      cy.get('#option-label-color-93-item-50').click()
  }

  get addCart() {
    cy.get('#product-addtocart-button').click()
  }

  get CartNotification(){
    cy.get('.message-success').should('contain.text', 'You added Radiant Tee to your shopping cart.');
  }


}
export default new Buy();