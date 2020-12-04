const express = require('express');
const app = express();


app.get('/', (req, res) =>{
//    console.log(); 
  res.send(`${req.query.name} is are coding live at mssa`)
})

app.listen(3000);