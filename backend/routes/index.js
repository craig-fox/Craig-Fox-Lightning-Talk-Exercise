const express = require('express');
const router = express.Router();
const Proposal = require('../models/proposal')

/* Fetch all proposals */
router.get('/proposals', (req, res) => {
  Proposal.find((err, items) => {
    if(err){
      res.send(err);
    } else if (items.length > 0){
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(items);
    } else {
      res.send({"message":"No proposals present"})
    }
  })
})

/* Add a proposal */
router.post('/proposals/add', (req, res) => {
  const topic = req.body._topic;
  Proposal.countDocuments({topic}, (err, count) => {
    if(count === 0){
      let proposal = new Proposal();
      const description = req.body._description;
      const emailAddress = req.body._emailAddress;
      const submitted = new Date(req.body._submitted);
      const talkDate = new Date(req.body._talkDate);

      const propObj = {"topic":topic,
        "description": description,
        "emailAddress": emailAddress,
        "submitted": submitted,
        "talkDate": talkDate};

      proposal.set(propObj)
      proposal.save(err=>{
        if(err) {
          res.send(err)
        } else {
          res.json({"message":`Proposal ${topic} saved in database`});
        }
      })
    } else {
      res.json({"message":"Duplicate proposal, cannot submit"});
    }
  });

})

module.exports = router;
