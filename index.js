const express  = require('express');
const mongoose = require('mongoose');


const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const router = require('./routes/index');
app.use('/', router);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
