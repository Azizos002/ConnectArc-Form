const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  game1: String,
  game1Response: String,
  game2: String,
  game2Response: String,
  game3: String,
  game3Response: String,
  game4: String,
  game4Response: String,
  game5: String,
  game5Response: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
