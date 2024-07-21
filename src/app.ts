import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import personRoutes from './routes/birthdayRoutes';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://ashwajittayade30:4BahF8C8pxp4xBgT@cluster0.6plgfng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch((error: Error) => console.log(error));

app.use('/api/person', personRoutes);

app.listen(3000, () => {
  console.log('Connected to server 3000');
});


