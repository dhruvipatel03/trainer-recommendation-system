import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized, login again' });
        }

        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = token_decode.userId
        
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

export default authUser;
