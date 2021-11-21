var Service = require('../model/service');

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Tous les champs doivent etre remplir"});
        return;
    }

    const service = new Service({
        car_type: req.body.car_type,
        car_brand: req.body.car_brand,
        car_model: req.body.car_model,
        car_color: req.body.car_color,
        plan: req.body.plan,
        cash: req.body.cash,
        client: req.body.client

    });

    service
        .save(service)
        .then(data=>{
            res.send(data);
            //res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({message: err.message|| "Une erreur survenue"});
        })
}