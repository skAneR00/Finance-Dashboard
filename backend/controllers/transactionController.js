import prisma from '../prisma/client.js';

export const getAll = async (req, res) => {
    const data = await prisma.transaction.findMany();
    res.json(data);
};

export const addTransaction = async (req, res) => {
    const { type, amount, category, comment, userId } = req.body;
    const newTx = await prisma.transaction.create({
        data: { type, amount, category, comment, userId }
    });
    res.json(newTx);
};
