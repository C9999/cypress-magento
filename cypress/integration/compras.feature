# language: pt
Funcionalidade: Compras

Cenário: Visualizar detalhe do produto
Dado que eu acesso a loja
Quando estou na página inicial
E clico no produto desejado
Então vejo as informações sobre o produto

Cenário: Adicionar produto ao carrinho
Dado que estou vendo as informações sobre o produto
Quando seleciono o SKU
E adiciono ao carrinho
Então vejo a notificação que o produto foi adicionado carrinho