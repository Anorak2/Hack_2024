const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
var mailRouter = require('./mail/mailer');


const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/mail", mailRouter)


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

    // Connects to DB/Staff
    const database = client.db('my_database');
    const staffCollection = database.collection('staff');


    // POST Handler
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


    // GET Handler
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

    app.get('/api/email', async (req, res) => {
      
    });


    // PUT Handler
    app.put('/api/staff/:firstName/:lastName', async (req, res) => {
      const { firstName, lastName } = req.params;
      const updatedFields = req.body;
    
      try {
        // Find the staff member by name
        const staff = await StaffModel.findOne({ firstName, lastName });
    
        if (!staff) {
          return res.status(404).json({ error: "Staff member not found" });
        }
    
        // Update the staff member with the provided fields
        Object.assign(staff, updatedFields);
    
        // Save the updated staff member
        await staff.save();
    
        res.status(200).json({ message: "Staff member updated successfully" });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Internal server error" });
      }
    });


    // Declares Running
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
  catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

// Handles Closing
process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});