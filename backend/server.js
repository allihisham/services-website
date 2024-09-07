const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST'],
}));

app.use(bodyParser.json());

const csvFilePath = path.join(__dirname, 'data.csv');

// Create CSV file if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  const headers = 'First Name,Last Name,Date Of Birth,Phone,Email Address,Post Code,Address,Service\n';
  fs.writeFileSync(csvFilePath, headers);
}

app.post('/api/submit-form', (req, res) => {
  const { firstName, lastName, dateOfBirth, phone, email, postalCode, address, service } = req.body;
  const newEntry = `${firstName},${lastName},${dateOfBirth},${phone},${email},${postalCode},${address},${service}\n`;

  fs.appendFile(csvFilePath, newEntry, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving data');
    }
    res.status(200).send('Data saved successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
