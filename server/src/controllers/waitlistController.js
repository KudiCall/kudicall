const { validationResult } = require('express-validator');
const waitlistService = require('../services/waitlistService');

exports.submitWaitlist = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, businessType } = req.body;
        
        console.log("Incoming waitlist request");
        console.log("Payload:", { fullName, email, businessType });
        
        const result = await waitlistService.create({ fullName, email, businessType });

        if (!result.success) {
            return res.status(409).json(result);
        }

        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

exports.getWaitlists = async (req, res, next) => {
    try {
        console.log("Fetching waitlist entries...");
        
        const data = await waitlistService.getAll();
        
        console.log(`Retrieved ${data.length} waitlist entries.`);
        
        return res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        console.error("Error retrieving waitlists:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to retrieve waitlist."
        });
    }
};
