const mongoose = require('mongoose');
const proposalSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    maxLength: 80
  },
  description: {
    type: String,
    required: true,
    maxLength: 120
  },
  emailAddress: {
    type: String,
    required: true,
    maxLength: 250
  },
  submitted: Date,
  talkDate: Date
});

module.exports = mongoose.model('proposal', proposalSchema);
