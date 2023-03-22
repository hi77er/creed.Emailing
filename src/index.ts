import { PORT } from "./keys";
import app from "./app";

// Configure mongodb connection
// import "./services/mongodb";

const listenningOn = PORT || 80;
app.listen(listenningOn, () => {
  console.log(`Listenning on port: ${listenningOn}`)
});