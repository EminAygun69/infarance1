import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Import the path module
import { fileURLToPath } from 'url'; // Import this to work with ES modules

import routes from './routes/routes.js'; // Make sure the path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'Public' folder
app.use('/Public', express.static(path.join(__dirname, 'Public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'public', 'views'));


app.use('/',routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});