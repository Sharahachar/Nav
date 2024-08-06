const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let resignations = {}; // This will keep track of the resignation status

// Endpoint to send email
app.post('/send-email', async (req, res) => {
  const { name, id, domain, reason, managerEmail } = req.body;

  resignations[id] = 'submitted'; // Set status to 'submitted' when the email is sent

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sharathnvmca@gmail.com', // Replace with your email
      pass: 'pgkz nhat tswr gwnp',  // Replace with your email password
    },
  });

  let mailOptions = {
    from: 'sharathnvmca@gmail.com',
    to: managerEmail, // Replace with the manager's email
    subject: 'Resignation',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>ID Card Number:</strong> ${id}</p>
      <p><strong>Domain:</strong> ${domain}</p>
      <p><strong>Reason for Leaving:</strong> ${reason}</p>
      <p>
        <a href="http://localhost:5000/approve-resignation?id=${id}" style="color:green; font-size:20px;">✔ Approve</a>
        <a href="http://localhost:5000/cancel-resignation?id=${id}" style="color:red; font-size:20px; margin-left: 30%;">✘ Cancel</a>
      </p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Endpoint to approve resignation
app.get('/approve-resignation', (req, res) => {
  const { id } = req.query;
  if (resignations[id]) {
    resignations[id] = 'resignation_approved'; // Update status to 'resignation_approved'
    res.send('Resignation approved');
  } else {
    res.status(404).send('Resignation not found');
  }
});

// Endpoint to cancel resignation
app.get('/cancel-resignation', (req, res) => {
  const { id } = req.query;
  if (resignations[id]) {
    resignations[id] = 'cancelled'; // Update status to 'cancelled'
    res.send('Resignation cancelled');
  } else {
    res.status(404).send('Resignation not found');
  }
});

// Endpoint to check status
app.get('/check-status', (req, res) => {
  const { id } = req.query;
  const status = resignations[id];
  if (status) {
    res.send({ status });
  } else {
    res.status(404).send({ status: 'not_found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
