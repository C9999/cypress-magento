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