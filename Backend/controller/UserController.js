import sharp from "sharp";
import registeredUser from "../models/NewUserModel.js";

export const createUser = async (req, res) => {
  try {
    let userData = new registeredUser(req.body);
    if (req.file) {
       
       userData.picture = await sharp(req.file.buffer)
      .resize({ width: 130 }) // Resize to 300 pixels wide, keeping aspect ratio
      .toBuffer();
    }
    let result = await userData.save();
    console.log("User has been created:", userData);
    res.json(result);
  } catch (error) {
    console.error("Error in making new User Profile", error);
    res.status(500).send("An error occurred while creating the user profile.");
  }
};
 
 