import mongoose, { Schema } from 'mongoose';

const acronymSchema = new Schema({
  acronym: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});
const Acronym = mongoose.model('Acronym', acronymSchema);

export default Acronym;
