const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/topic-proposal';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log("Connected to database topic-proposal")
})

mongoose.connection.on('error', err => {
  console.log("Error connecting to database topic-proposal", err)
})

mongoose.connection.on('disconnected', () => {
  console.log("Disconnected from database topic-proposal")
})

const shutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Shut down, ${msg}`);
    callback();
  });
};

process.on('SIGINT', () => {
  shutdown('app was terminated', () => {
    process.exit(0);
  });
});

require('./proposal')
