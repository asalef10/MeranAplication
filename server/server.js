const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
// const mongoDB = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const db = require("./DB");
db.on('error', () => {
  console.log('');
});
const PORT = process.env.PORT;
// const {
//   getAllStudents,
//   postStudent,
// } = require('./controlers/studentControlers');
// const urlMongo = process.env.CONNECTION_URL;
const studentRouter = require('./rauting/rautingStudents');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dbStudent', studentRouter);

app.use(express.json());

// app.get('/students',getAllStudents)
// app.post('/students',postStudent)

app.listen(PORT || 8080);
