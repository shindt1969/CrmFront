const express = require('express');
const bodyParser = require('body-parser');
var mysql      = require('mysql');

var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3307',                   
  database: 'bezkoder_db'  
}); 

connection.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// app.set('port', (process.env.PORT || 8080));

app.post('/api/auth/register', function(req, res) {
  // console.log('321',req.body)
  var  username = req.body.username;
  var  password = req.body.password;
  var  addSql = 'INSERT INTO User(Cname,Cpassword) VALUES(?,?)';
  var  addSqlParams = [username, password];
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        
   console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
    });

  res.send(req.body);
  connection.end();
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
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




// app.listen(app.get('port'), () => {
//     console.log(`Find the server at: http://localhost:${app.get('port')}/`);
//   });