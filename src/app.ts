import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { authenticate } from './middlewares/auth.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("SportOn Backend API is Running");
})

app.get('/test-middleware', authenticate, (req, res) => {
    res.send("This is a test route for middleware");
})

export default app;