const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    shift_value: { type: Number, required: true },
    plain_text: { type: String, required: true },
    encrypted_text: { type: String, required: true },
    decrypted_text: { type: String, required: true }
  });
  
module.exports = mongoose.model('Data', DataSchema);