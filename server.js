const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const { configDotenv } = require('dotenv');

configDotenv();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connexion à MongoDB réussie');
})
.catch(err => {
    console.log('Erreur de connexion à MongoDB:', err);
});


const FormSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    game1: String,
    game1Feedback: String,
    game2: String,
    game2Feedback: String,
    game3: String,
    game3Feedback: String,
    game4: String,
    game4Feedback: String,
    game5: String,
    game5Feedback: String,
    suggestions1: String,
    suggestions2: String,
    suggestions3: String,
    suggestions4: String,
    suggestions5: String,
});

const FormData = mongoose.model('FormData', FormSchema);


app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(200).send('Données enregistrées avec succès');
    } catch (err) {
        res.status(500).send('Erreur lors de l\'enregistrement des données');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'front.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});