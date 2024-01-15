import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter';
import actionRouter from './routers/actionRouter';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/action', actionRouter);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('Server start on port:', PORT);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
