const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    
    res.send(`${req.query.name} is coding`)
})
 
 app.listen(process.env.PORT || 3000);