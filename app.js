const express = require('express');

const app = express();

/* Middlewares config */

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/* App routes */

// app.get('/', (req, res) => {
//   res.render('index', {
//     name: req.query.name
//   })
// })

app.get('/users/:name', (req, res) => {
  const data = {
    name : req.params.name
  }
  res.render('index', data)
})

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Ready!')
});
