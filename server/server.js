// Now we import express
import express from "express";

// now we initilise express
const app = express();
// now we need to tell express to read JSON
app.use(express.json());
// I need to tell my app to listen to a dspecific port
const PORT = 8080; //you can use this  to save the port becomes useful when no longer on a local port
app.listen(PORT, function () {
  console.log("Ya want ya server? Well it's runnin");
});
// I need to write write an end point for my root route
// so we can read data
app.get("/", function (request, response) {
  response.json({ message: "Whatcha want? you can see me ya peeking Tom" });
});
// now we need to write data to our server
app.post("/add-data", function (request, response) {
  // we will use our response to access the data in the body, the body stores the data coming from the user
  const bodyData = request.body;
  //this console log will be replaced with the code that inserts the bodyData into the database
  console.log(bodyData);
  // and we will use our responce to see what data was added
  response.json({ message: "I got your body data ;-)" });
});
