const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(process.env.PORT || 5000, () => console.log(`Server started on` + (process.env.PORT || 5000)));