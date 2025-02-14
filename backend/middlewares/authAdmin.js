import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;

        if (!atoken) {
            return res.status(401).json({ success: false, message: 'Not Authorized, login again' });
        }

        // Verify the token
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
        
        // Check if the decoded token contains email and role
        if (!token_decode.email || token_decode.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Access denied. You are not an admin.' });
        }

        req.admin = token_decode; // Store decoded admin data in request
        next(); // Proceed if authentication is successful
    } catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

export default authAdmin;
