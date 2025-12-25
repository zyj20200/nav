import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const app = express();
const PORT = 80;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
const authTokens = new Set<string>();

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'html' directory
app.use(express.static(path.join(__dirname, '../html')));

const DATA_FILE = path.join(__dirname, '../html/data.json');

// Login API
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        const token = crypto.randomBytes(16).toString('hex');
        authTokens.add(token);
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
});

// Middleware to check auth token
const checkAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (authTokens.has(token)) {
            next();
            return;
        }
    }
    res.status(401).json({ error: 'Unauthorized' });
};

// API to get navigation data
app.get('/api/data', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading data file:', error);
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// API to update navigation data
app.post('/api/data', checkAuth, async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2), 'utf-8');
        res.json({ success: true });
    } catch (error) {
        console.error('Error writing data file:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
