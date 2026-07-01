const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/waitlistController');
const { body } = require('express-validator');

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Waitlist endpoint with validation
router.post('/waitlist', [
    body('fullName').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('businessType').trim().notEmpty().withMessage('Business Type is required')
], waitlistController.submitWaitlist);

// Get all waitlist entries
router.get('/waitlist', waitlistController.getWaitlists);

module.exports = router;
