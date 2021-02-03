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
// Add express build client to serve up express build folder when we go to heroku

  app.use(express.static("client/build"));

// Add  a get route to test

app.get("/api/config", (req,res) => {
    res.json({ success: true});
});

// Wildcard route, anything that is hit somewhere else, this will be served up

app.get("*", (res,req) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});