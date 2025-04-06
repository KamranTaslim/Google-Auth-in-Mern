const UserModel = require("../models/userModel.js");
const { oauth2client } = require("../utils/googleConfig.js");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const googleLogin = async (req, res) => {
    try {
        const { code } = req.query;

        if (!code) {
            return res.status(400).json({ success: false, message: "Authorization code is required" });
        }

        // Exchange authorization code for tokens
        const { tokens } = await oauth2client.getToken(code);
        oauth2client.setCredentials(tokens);

        // Fetch user info from Google API
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
        );

        const { email, name, picture } = userRes.data;

        // Check if user exists in the database
        let user = await UserModel.findOne({ email });
        if (!user) {
            // Create a new user if not found
            user = await UserModel.create({
                email,
                name,
                image: picture,
            });
        }

        // Generate JWT token
        const { _id } = user;
        const token = jwt.sign(
            { _id, email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_TIMEOUT }
        );

        return res.status(200).json({ success: true, token, user });
    } catch (error) {
        console.error("Error during Google login:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = googleLogin;