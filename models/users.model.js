
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    documentType: {
      type: String,
    },
    documentNumber: {
      type: Number,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    hobbie: {
      type: String,
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;