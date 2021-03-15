import express from 'express';
import mongoose from 'mongoose';
import Quiz from './Models/Question.js';
import bodyParser from 'body-parser';
import dataquiz from './Mock/dataquiz.js';

mongoose.connect(`mongodb://admin:pass@localhost/quiz?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch((e) => {console.log('Something is wrong! | Error type: '+ e);});

const app = express();
app.use(bodyParser.json());

app.get('/api/quiz', async (_, res) => {
    const quiz = await Quiz.find({});
    console.log("[Server Log] | request all data");
    res.send(quiz);
});

app.get('/api/quiz/:id', async (req, res) => {
    const quiz = await Quiz.find({_id: req.params.id});
    console.log("[Server Log] | request one data");
    res.send(quiz[0]);
});

app.get('/api/check/:id/:ans', async (req, res) => {
    const quiz = await Quiz.find({_id: req.params.id});
    var chk;
    if (quiz[0].Answer.toLowerCase() === req.params.ans.toLowerCase()) {chk = true; }else{ chk = false;}
    console.log(quiz[0]);
    console.log(chk);
    res.send({check: chk});
});

app.get('/api/addquiz/:level/:name/:ans/:cat/:acti', async (req, res) => {
    const q = new Quiz({
      Title: req.params.name,
      Level: req.params.level,
      Question: req.params.acti,
      Answer: req.params.ans,
      Catagory: req.params.cat
    });
      q.save().then(() => {
        console.log('Quiz saved')
      })
    res.send();
});

app.listen(5000, () => {
    console.log('Server running on port https https://127.0.0.1:5000/');
});
  