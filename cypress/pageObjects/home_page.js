class Home {
  constructor(){
    this.titleHome = 'Home Page'
    this.titleHotSellers = 'Hot Sellers'
    this.itemA = 'Radiant Tee'
    this.itemD = 'Hero Hoodie'
    this.itemF = 'Push It Messenger Bag'
    this.itensMenu = '.product-items'
  }

  get ShopPage(){
    cy.visit('/', {failOnStatusCode: false
    }, {
      target: '_self'
    })
    cy.contains(this.titleHome)
  }

  get HomePage(){
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    cy.contains(this.titleHotSellers)
    cy.contains(this.itemA)
  }

  get InfosHomePage() {
    cy.get('.block-promo > img').should('be.visible')
    cy.get(this.itensMenu).should('exist')
  }

  get MenuView() {
    cy.get('#ui-id-2').should('exist')
  }

  get HotSellersSesseion() {
    cy.window().then((win) => {win.scrollBy(0, 800); });
    cy.get(this.itensMenu).should('exist')
    cy.contains(this.itemD).true
    cy.contains(this.itemF).true
    
  }
}
export default new Home();