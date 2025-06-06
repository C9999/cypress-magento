class Buy {
  constructor(){
    this.titleProductA = 'Radiant Tee'
    this.descriptionProductA = '#description > .product > .value'
    this.descriptionProductAText = "So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt."
    this.urlProductA = 'https://magento.softwaretestingboard.com/radiant-tee.html'
    this.sizeM = '#option-label-size-143-item-168'
    this.colorRed = '#option-label-color-93-item-50'
    this.addButton = '#product-addtocart-button'
    this.messageToast = 'You added Radiant Tee to your shopping cart.'
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
      cy.get(this.sizeM).click();
      cy.get(this.colorRed).click()
  }

  get addCart() {
    cy.get(this.addButton).click()
  }

  get CartNotification(){
    cy.get('.message-success').should('contain.text', this.messageToast);
  }


}
export default new Buy();