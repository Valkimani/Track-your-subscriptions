// Require express and Mongoose
const express= require ("express");
const mongoose=require ("mongoose");
const app=express();

const PORT= process.env.PORT || 3001;
// Add a middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Add  a get route to test

app.get("/api/config", (req,res) => {
    res.json({ success: true});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});