const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const Hero = require('./api/heros/heros.model');

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection is Succesful');
  })
  .catch((e) => {
    console.log('No Connection', e);
  });

app.post('/Students', (req, res) => {
  const user = new Hero(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
app.get('/', async (req, res) => {
  try {
    const GHero = await Hero.find();
    res.send(GHero);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
app.delete('/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const GHero = await Hero.findOneAndDelete(_id);
    res.status(201).send(GHero);
    if (!_id) {
      res.status(405).send(GHero);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
app.listen(5000, (req, res) => {
  console.log(`Server is running on port.`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
