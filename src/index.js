const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();

// Root route handler
app.get('/', (req, res) => {
  return res.json({ message: 'Server is running!' });
});

app.use('/api', apiRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`)
});