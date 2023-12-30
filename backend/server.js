const express = require('express')
const cors = require('cors');
const userRoutes=require('./API/src/routes')

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:4200', // Remplacez par l'URL de votre application Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Hello World!")
})

app.use('/api/v1/users', userRoutes);
app.listen(port, ()=>console.log(`app listening on port ${port}`));
