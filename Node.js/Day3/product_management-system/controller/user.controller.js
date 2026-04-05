import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { createError } from "../helpers.js";

const genToken = (user) => {
  return jwt.sign(
    { 
      userId: user.id || user._id, 
      username: user.username,
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    
    const exists = await User.findOne({ email });
    if (exists) {
      return next(createError(409, "User already exists with this email"));
    }

    const newUser = await User.create({ username, email, password, role });
    const token = genToken(newUser);

    const userResponse = newUser.toJSON();

    res.status(201).json({ 
      success: true,
      message: "User registered successfully",
      user: userResponse, 
      token 
    });
  } catch (error) {
    next(error);
  }
}

export const loginUser = async(req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      return next(createError(401, "invalid email or password"));
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return next(createError(401, "invalid email or password"));
    }
    
    const token = genToken(user);
    const userResponse = user.toJSON();

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: userResponse,
      token
    });
  } catch (error) {
    next(error);
  }
}