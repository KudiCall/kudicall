const app = require('./app');
require('dotenv').config();
const healthRoutes = require("./routes/health");


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api/health", healthRoutes);