module.exports = function(app){

const controller = app.Controller.ProdutoController;

app.get('/produto', controller.getProdutos);

}
