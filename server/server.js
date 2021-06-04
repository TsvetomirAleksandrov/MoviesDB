const express = require('express');
const app = express();
const {PORT} = require('./config/config');
const routes = require('./routes/routes');

require('./config/express')(app);
require('./config/mongoose');

app.use(routes);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));


// //App Config
// const app = express();
// const connection_url = "mongodb://admin:x4s7q3LOFCQL1BEw@cluster0-shard-00-00.sglwt.mongodb.net:27017,cluster0-shard-00-01.sglwt.mongodb.net:27017,cluster0-shard-00-02.sglwt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-schyxj-shard-0&authSource=admin&retryWrites=true&w=majority";


// //Middlewares
// app.use(express.json());
// app.use(Cors());


// //DB Config
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// //API Endpoints -CONTROLLERS
// app.get('/', (req, res) => res.status(200).send('Hello World!'));

// app.post('/tinder/cards', (req, res) => {
//   const dbCard = req.body;

//   Cards.create(dbCard, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// app.get('/tinder/cards', (req, res) => {
//   Cards.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// //Listener
// app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));