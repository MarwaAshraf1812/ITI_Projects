import * as authService from "./auth.service.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

export const register = async(req, res) => {
  try {
    const {error, value} = registerSchema.validate(req.body);
    if(error) {
      return res.status(400).json({success: false, message: error.details[0].message});
    }

    const user = await authService.registerNewUser(value);
    res.status(201).json({success: true, message: "تم تسجيل الحساب بنجاح", user});
    
  } catch (error) {
    res.status(400).json({success: false, message: error.message || "حدث خطأ أثناء تسجيل الحساب"});
  }
}

export const login = async(req, res) => {
  try {
    const {error, value} = loginSchema.validate(req.body);
    if(error) {
      return res.status(400).json({success: false, message: error.details[0].message});
    }

    const { user, token } = await authService.loginUser(value);
    
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict"
    });

    res.status(200).json({success: true, message: "تم تسجيل الدخول بنجاح", user});
  } catch (error) {
    res.status(400).json({success: false, message: error.message || "حدث خطأ أثناء تسجيل الدخول"});
  }
}

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });
  res.status(200).json({ success: true, message: "تم تسجيل الخروج" });
};