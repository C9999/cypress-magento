import home from '../../pageObjects/home_page';
import buy from '../../pageObjects/compras_page';

Given(/^que eu acesso a loja$/, () => {
	home.ShopPage
});

When(/^(que )?estou na página inicial$/, () => {
	home.HomePage
});

And(/^clico no produto desejado$/, () => {
	home.HotSellersSession
	buy.SelectProductA
});

Then(/^vejo as informações sobre o produto$/, () => {
	buy.InfoProductAPage
});

Given(/^que estou vendo as informações sobre o produto$/, () => {
	home.ShopPage
	home.HomePage
	home.HotSellersSession
	buy.SelectProductA
	buy.InfoProductAPage
});

When(/^seleciono o SKU$/, () => {
	buy.SelectSKU
});

And(/^adiciono ao carrinho$/, () => {
	buy.addCart
});

Then(/^vejo a notificação que o produto foi adicionado carrinho$/, () => {
	buy.CartNotification
});