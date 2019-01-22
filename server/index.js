const express = require('express');
const bodyParser = require('body-parser');
const ctrl= require('./controllers/messages_controller');

const app = express();
app.use(bodyParser.json());
app.use( express.static(__dirname + '/../public/build' ) )

app.get('/api/messages', ctrl.read);

app.post('/api/messages', ctrl.create);

app.put('/api/messages/:id', ctrl.update);

app.delete('/api/messages/:id', ctrl.delete);


app.listen(3001, () => {
    console.log(`3001: functioning admirably...`)
})