const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  BuySell: String,
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

messageSchema.index({ createdAt: 1 }, { expires: 2592000 });

const message = mongoose.model('message', messageSchema);

module.exports = message;
