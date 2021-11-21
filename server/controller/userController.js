var User = require('../model/users');


exports.add = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "les champs doivent etre remplire"});
        return;
    }
    const user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    })

    user
      .save(user)
      .then(data=>{
          // res.send(data)
          res.redirect('/register')
      })
      .catch(err=>{
          res.status(500).send({
              message: err.message || "Une erreur est survenue"
          });
      });
}