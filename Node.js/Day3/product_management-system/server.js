import app from "./app.js";
import "dotenv/config";
import connectDB from "./config/db.config.js";

connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
