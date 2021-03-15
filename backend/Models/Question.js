import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  Level: String,
  Title: String,
  Question: String,
  Answer: String,
  Catagory: String
});

const question_model = mongoose.model('Question', schema);

export default question_model;