import express from 'express';
const app = express();
const port = 3011;
import path from 'path';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();



//Set the front end path
const frontEnd = path.join(__dirname, '..', 'client', 'dist');


app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,

    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


app.get('/*', function(req, res){
  res.sendFile(frontEnd + '/index.html');
});



app.listen(port, ()=>{
  console.log('App started on port ' + port);
});