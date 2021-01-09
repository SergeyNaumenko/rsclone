const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const baseUrl = 'mongodb+srv://Alexander:1234qwer@cluster0.uyhjh.mongodb.net/app?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.router'));


async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URL || baseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start();