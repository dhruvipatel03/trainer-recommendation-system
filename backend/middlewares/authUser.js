import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    console.log("Headers Received:", req.headers); // Debugging

    const token = req.headers.authorization?.split(" ")[1]; // Extract token
    if (!token) {
      return res.status(401).json({ success: false, message: "Token is missing" });
    }

    const decoded = jwt.verify(token, "your_secret_key"); // Use correct secret key

    console.log("Decoded Token:", decoded); // Debugging

    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;
