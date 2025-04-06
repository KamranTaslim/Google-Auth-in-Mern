
const express = require('express');
const cors = require('cors');
require('dotenv').config();//shortcut for import and config
const authRouter = require('./routes/authRouter.js');
require('./models/dbConnection.js');
const app = express();

const port = process.env.PORT || 8080;

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use("/auth",authRouter)


app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
}
);