var express = require('express');
var router = express.Router();
const List = require("../models/List");

router.delete('/:id', (req,res,next)=>{
  List.findByIdAndRemove(req.params.id)
  .then(r=>res.status(200).json(r))
  .catch(e=>res.status(500).send(e));
});

router.patch('/:id', (req,res,next)=>{
  List.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(r=>res.status(200).json(r))
  .catch(e=>res.status(500).send(e));
});

router.post('/', (req,res,next)=>{
  const newList = new List({
    title:req.body.title,
    position:req.body.position,
    cards:req.body.cards
  });

  newList.save()
  .then(r=>res.status(200).json(newList))
  .catch(e=>res.status(500).send(e));

});

router.get('/', function(req, res, next) {
  List.find()
  .populate('cards')
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(err));
});

module.exports = router;
