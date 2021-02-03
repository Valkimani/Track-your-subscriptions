// Require express and Mongoose
const express= require ("express");
const mongoose=require ("mongoose");
const app=express();

const PORT= process.env.PORT || 3001;
// Add a middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Added mongoose config object to the.connect method
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/track-your-subscription",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  
  const connection = mongoose.connection;
  
  connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
  });
  
  connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
  });
// Add  a get route to test

app.get("/api/config", (req,res) => {
    res.json({ success: true});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});