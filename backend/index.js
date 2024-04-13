const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Replace the uri string with your connection string.
const uri = "mongodb+srv://dbuser:HackKU@cluster0.6toorrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('my_database');
    const movies = database.collection('staff');

    app.post('/api/staff', async (req, res) => {
      // Extract data from request body
      const userData = req.body;

      try {
        // Insert data into MongoDB
        const result = await usersCollection.insertOne(userData);
        console.log('User added:', result.insertedId);
        res.status(201).send('User added successfully');
      } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);