
exports = function(changeEvent) {
  
    var fullDocument = changeEvent.fullDocument;
    var collection = context.services.get("mongodb-atlas")
      .db("Workshop").collection("NewRestaurants");
    var status = collection.insertOne(fullDocument);
    console.log(status);
    
};
