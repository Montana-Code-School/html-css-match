const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/absolute',express.static(path.join(__dirname, 'public/absolute')));
app.use('/relative',express.static(path.join(__dirname, 'public/relative')));
app.use('/layouts',express.static(path.join(__dirname, 'public/layouts')));
app.use('/absolute_fixed', express.static(path.join(__dirname, 'public/absoluteVsFixed')))

app.listen(port, function(){
  console.log("Being served on " + port)
});
