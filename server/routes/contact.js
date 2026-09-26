const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Contact = require('../models/Contact');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS?.replace(/\s/g, '');
const emailTo = process.env.CONTACT_TO || emailUser;
const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: emailUser, pass: emailPass },
});

// POST /api/contact — Save contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }

    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters.' });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters.' });
    }

    if (!emailUser || !emailPass || !emailTo) {
      return res.status(503).json({ error: 'Contact email is not configured yet.' });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await mailer.sendMail({
      from: `Portfolio Contact <${emailUser}>`,
      to: emailTo,
      replyTo: contact.email,
      subject: `Portfolio contact from ${contact.name}`,
      text: `Name: ${contact.name}\nEmail: ${contact.email}\n\nMessage:\n${contact.message}`,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! I will get back to you soon.',
      id: contact._id,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: errors.join('. ') });
    }
    console.error('Contact route error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// GET /api/contact — Retrieve all submissions (protected in real deployment)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
});

module.exports = router;
