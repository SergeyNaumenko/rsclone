import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app: express.Application = express();
const baseUrl:string = 'mongodb+srv://Alexander:1234qwer@cluster0.uyhjh.mongodb.net/app?retryWrites=true&w=majority';
const PORT:number|string = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/auth.router'));


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