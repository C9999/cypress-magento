class Buy {
  constructor(){
    this.titleProductA = 'Radiant Tee'
    this.descriptionProductA = '#description'
    this.descriptionProductAText = "So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt."
    
    this.titleHotSellers = 'Hot Sellers'
    this.itemA = 'Radiant Tee'
    this.itemD = 'Hero Hoodie'
    this.itemF = 'Push It Messenger Bag'
    this.itensMenu = '.product-items'
  }

  get SelectProductA() {
    cy.contains(this.itemA).click()
  }

  InfoProductAPage() {
    cy.visit('/', {
      failOnStatusCode: false
    });

    cy.url().should('eq', 'https://magento.softwaretestingboard.com/radiant-tee.html');
    cy.contains(this.titleProductA);
    cy.get(this.descriptionProductA).should('eq', this.descriptionProductAText)
    console.log("//////////////////")
  }

  get MenuView() {
    cy.get('#ui-id-2').should('exist')
  }

  get HotSellersSession() {
    cy.window().then((win) => {win.scrollBy(0, 800); });
    cy.get(this.itensMenu).should('exist')
    cy.contains(this.itemD).true
    cy.contains(this.itemF).true
    
  }
}
export default new Buy();