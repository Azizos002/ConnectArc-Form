const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api/feedback", require("./routes/feedback"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'front.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
