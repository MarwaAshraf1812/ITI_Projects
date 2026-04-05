import jwt from "jsonwebtoken";


export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
  });
}

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token) {
    return res.status(401).json({ message: "no token " });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch(error) {
    error.statusCode = 401;
    next(error);
  }
}

export const authorize =(role) => {
  return (req, res, next) => {
    if(!req.user || !role === req.user.role) {
      return res.status(403).json({message:"forbidden"})
    }
    next();
  }
}