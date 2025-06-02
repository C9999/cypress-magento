import home from '../../pageObjects/home_page';

Given(/^que eu acesso a loja$/, () => {
	home.ShopPage
});

When(/^(que )?estou na página inicial$/, () => {
	home.HomePage
});

Then(/^vejo as informações gerais da loja$/, () => {
	home.InfosHomePage
});

When(/^as informações gerais estiverem carregadas$/, () => {
	home.InfosHomePage
});

Then(/^deve visualizar o menu principal$/, () => {
	home.MenuView
});

Then(/^deve visualizar a sessão de itens mais vendidos$/, () => {
	home.HotSellersSesseion
});
