import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';
import animeRoutes from './routes/anime.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/user',userRoutes);
app.use('/anime',animeRoutes)

const CONNECTION_URL = 'mongodb+srv://shivam:shivam@cluster0.pmpu4.mongodb.net/AnimeFlixx?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));