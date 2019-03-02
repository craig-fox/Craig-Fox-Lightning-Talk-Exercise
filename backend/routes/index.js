const express = require('express');
const router = express.Router();
const Proposal = require('../models/proposal')

/* Fetch all proposals */
router.get('/proposals', (req, res) => {
  Proposal.find((err, items) => {
    if(err){
      res.send(err);
    } else if (items.length > 0){
      res.json(items);
    } else {
      res.send({"message":"No proposals present"})
    }
  })
})

/* Add a proposal */
router.post('/proposals/add', (req, res) => {
  console.log("Req", req.body)
  const topic = req.body.topic;
  const description = req.body.description;
  const emailAddress = req.body.emailAddress;
  const submitted = req.body.submitted;
  const talkDate = req.body.talkDate;

  Proposal.countDocuments({topic}, (err, count) => {
    if(count === 0){
      let proposal = new Proposal();
      proposal.set({"topic":topic,
                    "description": description,
                    "emailAddress": emailAddress,
                    "submitted": submitted,
                    "talkDate": talkDate})
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
