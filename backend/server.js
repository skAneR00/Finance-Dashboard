import express from 'express';
import cors from 'cors';
import transactions from './routes/transactions.js';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
}));
app.use(express.json());

app.use('/api/transactions', transactions);
app.use("/api/auth", authRoutes);

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
