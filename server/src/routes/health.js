const express = require("express");
const router = express.Router();
const { pool } = require("../database/connection");

router.get("/", async (req, res) => {
    try {
        await pool.query("SELECT 1");

        res.json({
            success: true,
            status: "healthy"
        });
    } catch (err) {
        res.status(500).json({
            success: false
        });
    }
});

module.exports = router;