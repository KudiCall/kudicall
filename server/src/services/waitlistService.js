const { pool } = require('../database/connection');

exports.create = async (data) => {
    const { fullName, email, businessType } = data;

    try {
        // Check if email already exists
        const [existing] = await pool.execute('SELECT id FROM waitlists WHERE email = ?', [email]);
        
        if (existing.length > 0) {
            return {
                success: false,
                message: "This email is already on the waitlist."
            };
        }

        // Insert new record
        await pool.execute(
            'INSERT INTO waitlists (full_name, email, business_type) VALUES (?, ?, ?)',
            [fullName, email, businessType]
        );

        return {
            success: true,
            message: "Successfully joined the waitlist."
        };
    } catch (error) {
        console.error("Database error during waitlist insert:", error);
        throw error;
    }
};

exports.getAll = async () => {
    try {
        const [rows] = await pool.execute(
            'SELECT id, full_name, email, business_type, created_at FROM waitlists ORDER BY created_at DESC;'
        );
        return rows;
    } catch (error) {
        console.error("Database error during fetching waitlists:", error);
        throw error;
    }
};
