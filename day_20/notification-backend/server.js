const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Generate random notification counts
function generateRandomNotifications() {
    return {
        networks: Math.floor(Math.random() * 150), // 0-149
        jobs: Math.floor(Math.random() * 50),      // 0-49
        messaging: Math.floor(Math.random() * 25), // 0-24
        notifications: Math.floor(Math.random() * 30) // 0-29
    };
}

// API endpoint for notifications
app.get('/notifications', (req, res) => {
    const notificationData = generateRandomNotifications();

    console.log('Generated notifications:', notificationData);

    res.json(notificationData);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Notifications endpoint: http://localhost:${PORT}/notifications`);
});