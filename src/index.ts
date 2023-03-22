import { PORT } from "./keys";
import app from "./app";
// import { connectMongoDb } from "./services/mongodb";

// Configure mongodb connection
// connectMongoDb();

const listenningOn = PORT || 80;
app.listen(listenningOn, () => {
  console.log(`Listenning on port: ${listenningOn}`)
});