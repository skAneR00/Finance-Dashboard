const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword, comparePassword } = require("../utils/hash");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashed = await hashPassword(password);
        const user = await prisma.user.create({
            data: { username, email, password: hashed },
        });
        res.status(201).json({ message: "User registered", user });
    } catch (error) {
        res.status(400).json({ error: "Registration failed", details: error });
    }
};

exports.login = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: identifier }, { username: identifier }],
            },
        });

        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: "Login failed", details: error });
    }
};
