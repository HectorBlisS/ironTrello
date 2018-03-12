var express = require('express');
var router = express.Router();
const Card = require("../models/Card");

/* GET users listing. */
router.post('/', function(req, res, next) {
  newCard = new Card({
    title:req.body.title,
    list:req.body.list
  });

  newCard.save()
  .then(r=>res.status(200).json(r))
  .catch(err=>res.status(200).send(err));

});

module.exports = router;
