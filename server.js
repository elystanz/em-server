const express = require('express');
const path = require('path');

// const port = 3001;
const PORT = process.env.PORT || 3001

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is running')
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'DevFolio/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});