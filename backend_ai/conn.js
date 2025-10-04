const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://rajsrivastava956_db_user:WlasRPq84w2nZ9Yd@cluster0.mz67wd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
  console.log("✅ Database Connected Successfully");
}).catch(err => {
  console.error("❌ Something went wrong:", err);
});
