const express = require('express');
const Datastore = require('nedb');
const cors = require('cors');
const app = express();
app.listen(4000, () => console.log("listening at 4000"));
app.use(cors());
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('databse.db');
database.loadDatabase();

app.get('/getAllPosts',  (request, response) => {
        const data =  database.getAllData().sort();
        response.json(data);
    });

app.post('/createDiscussion', (request,reposnse) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp=timestamp;
    database.insert(data);
    reposnse.json(data);
});