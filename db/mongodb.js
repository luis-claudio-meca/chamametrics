
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://chama:<password>@chamametrics.2zm8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
