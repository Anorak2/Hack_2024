const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");


const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Catch for /
app.get('/', (req, res) => {
  res.send('Hello nerd!');
});

// Replace the uri string with your connection string.
const uri = "mongodb+srv://dbuser:HackKU@cluster0.6toorrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('my_database');
    const staffCollection = database.collection('staff');

    app.post('/api/staff', async (req, res) => {
      console.log("Received request with data:", req.body);
      // Extract data from request body
      const userData = req.body;

      try {
        // Insert data into MongoDB
        const insertionResult = await staffCollection.insertOne(userData);
        console.log('User added:', insertionResult.insertedId);
        res.status(201).send('User added successfully');
      } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.get('/api/staff', async (req, res) => {
      try {
        const staffCollection = client.db('my_database').collection('staff');
        const staffList = await staffCollection.find({}).toArray();
        res.status(200).json(staffList);
      } catch (error) {
        console.error('Failed to retrieve data:', error);
        res.status(500).send('Failed to get staff data');
      }
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
  catch (err) {
    console.error(err);
  }
}
run().catch(console.dir);

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});