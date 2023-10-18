let express = require('express');
let app = express();
let port = 3000;
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
require('dotenv').config();


//Set the front end path
const frontEnd = path.join(__dirname, '..', 'client', 'dist');


app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: process.env.PORT,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
    })

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
})


app.get('/*', function(req, res){
    res.sendFile(frontEnd + "/index.html");
})



app.listen(port, ()=>{
    console.log("App started on port " + port);
})