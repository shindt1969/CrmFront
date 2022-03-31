const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.set('port', (process.env.PORT || 8111));

app.post('/api/auth/register', function(req, res) {
  // console.log('321',req.body)
  res.send(req.body);
});


app.post('/api/auth/login',function(req,res){
    if (req.body.username =="q" && req.body.password =="q") {
      res.send(req.body);
      console.log('backend check is membership')
    }else if(req.body.username =="w" && req.body.password =="w"){
      res.send(req.body);
      console.log('backend check is membership')
    } else {
      console.log('vvvv',req.body)
      res.send(false);
    }
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
  });