require('dotenv').config();
const app = require('./app');
const { syncDatabase } = require('./config/database');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Sync database models only in development
    if (process.env.NODE_ENV !== 'production') {
      await syncDatabase();
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
