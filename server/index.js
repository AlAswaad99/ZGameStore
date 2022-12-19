
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

  // Connecting to the database
  mongoose
    .connect("mongodb+srv://SYSADMIN:zWOYA2fkzbacRQqU@zgamestore.ozcgbes.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });

// server listening 
server.listen(8080, () => {
  console.log(`Server running on port ${8080}`);
});

module.exports = server;