let express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.send('hellk API');
});

app.listen(3012, function () {
    console.log('API startes');
});

