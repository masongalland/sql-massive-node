var app = require('./server');
var db = app.get('db');

module.exports = {
    Create: function(req, res){
        var params = [req.body.name, req.body.description, req.body.price, req.body.imageurl]
        db.create_product(params, function(err, resp){
            console.log('got all')
            res.send('Created Product');
        })
    },
    GetAll: function(req, res){

        db.read_products(function(err, resp){
            res.send(resp);
        })
    },
    GetOne: function(req, res){
        db.read_product([req.params.productId], function(err, product){
            res.send(product);
        })
    },
    Update: function(req, res){
        db.update_product([req.params.productId, req.body.description], function(err, product){
            res.send('Success');
        })
    },
    Delete: function(req, res){
        db.delete_product([req.params.id], function(err, products){
            res.send(products);
        })
    }
}