const express = require('express');
const bodyParser = require('body-parser');
var mysql      = require('mysql');
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs');

var connection = mysql.createConnection({     
  host     : 'mysqldb',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'bezkoder_db'  
}); 

// var connection = mysql.createConnection({     
//   host     : 'localhost',       
//   user     : 'root',              
//   password : '123456',       
//   port: '3307',                   
//   database: 'bezkoder_db'  
// });
// 可以直接選擇資料庫名稱


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
  var  password = bcrypt.hashSync(req.body.password,10);
  var  addSql = 'INSERT INTO User(Cname,Cpassword) VALUES(?,?)';
  var  seachSql = 'SELECT *FROM User WHERE Cname = ?';
  var  addSqlParams = [username, password];
  connection.query(seachSql,addSqlParams[0],function (err, result){
    if(result.length == 0){
      console.log('123',result.length,err)
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
    }else{
      console.log(result.length)
      res.send(" it the same account");
    }
  });
});


app.post('/api/auth/login',function(req,res){
  var  username = req.body.username;
  var  password = req.body.password;
  var  addSql = 'SELECT *FROM User WHERE Cname = ?';
  var  addSqlParams = [username, password];
  connection.query(addSql,addSqlParams[0],function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }else if( Object.keys(result).length ===0) {
      console.log('can not find database',req.body)
      res.send(false);
    }else{
      const isMatch = bcrypt.compareSync(addSqlParams[1],result[0].Cpassword)
      if(isMatch == true){
        const payload ={
          user_name:result[0].Cname
        }
        const token = jwt.sign({payload, exp: Math.floor(Date.now() / 1000)+(60*15)},'my_secret_key');
        console.log(Object.assign({ code: 200},{ message:'登入成功',token}),result[0].Cpassword,'backend check is membership')
        res.send(Object.assign({ code: 200},{ message:'登入成功',token})); /// 登入成功
      }else{
        res.send(false);
       }
    }   
  });
});


app.post('/api/auth/getinfro',function(req,res){
  const bearerHeader = req.headers.authorization;
  if( typeof bearerHeader !=='undefined'){
    const bearer = bearerHeader.split(' '); // 字串切割
    const bearerToken = bearer[1];
    console.log(bearerHeader,"/",bearer)
    jwt.verify(bearerToken, 'my_secret_key', (err, payload) => {
      if(err){
        console.log("1",err.name,bearerToken)
        res.send(bearerToken);
      }else{
        var username = payload.payload.user_name
        var  addSql = 'SELECT *FROM UserInfo WHERE Cname = ?';
        var  addSqlParams = [username];
        console.log("flag",username)
        connection.query(addSql,addSqlParams[0],function (err, result) {
          if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
          }else if( Object.keys(result).length ===0){
            
            res.send(false);
          }else{
            const isresult = result
            res.send(isresult);
          }})
      }
    })
  } else {
    res.send("test");
  }
});



const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.listen(app.get('port'), () => {
//     console.log(`Find the server at: http://localhost:${app.get('port')}/`);
//   });