const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;
const HeroSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
});
const Hero = new mongoose.model('heroSchema', HeroSchema);
module.exports = Hero;
