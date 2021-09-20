const express = require("express");
const path = require('path');




const app = express();



app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req,res) => {
    res.status(200).sendFile('/public/index.html',{ 
      root:__dirname
    });
   
    
  }); 


  app.get('*', (req, res) => {
    res.status(404).send('404! This is an invalid URL.')
  });

  //app.listen(3005, ()=> {console.log('Example app listening on port 3005!')});

  module.exports = app.listen(3005, ()=> {console.log('Example app listening on port 3005!')});

 