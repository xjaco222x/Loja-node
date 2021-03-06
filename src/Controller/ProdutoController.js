module.exports = function(app){

    var controller = {};
    var produto = app.Model.ProdutoModel;

    controller.getAll = function(req, res){ 
        produto.find({}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.getById = function(req, res){ 
        var id = req.params.id;
        produto.findOne({_id: id}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.getByCodigo = function(req, res){ 
        var codigo = req.params.codigo;
        produto.findOne({codigo: codigo}, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    }

    controller.insert = (req, res) => {
        var body = req.body;
        produto.create(body, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    controller.update = (req, res) => {
        var body = req.body;
        var id = req.params._id;
        produto.updateOne({_id: id}, body, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    controller.inative = (req, res) => {
        var id = req.params._id;
        produto.updateOne({_id: id}, { $set: { status: false} }, (err, data) => {
            if (err) {
                return  res.status(500).json({ error: true, data: err });
            }
            return  res.status(201).json({ error: false, data: data });
        });
    };

    return controller;
}